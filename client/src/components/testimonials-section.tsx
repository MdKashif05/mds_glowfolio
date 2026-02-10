import { Quote, Plus, Loader2, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertReviewSchema, type Review, type InsertReview } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

const initialTestimonials = [
  {
    name: "Saatvik Nagpal",
    role: "Founder, EazyGrad",
    content: "Kashif is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the field of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Priya Sharma",
    role: "CTO, TechFlow Solutions",
    content: "Working with Kashif was an absolute pleasure. He transformed our outdated platform into a modern, high-performance web application. His expertise in the MERN stack is evident in every line of code. Highly recommended for any complex development work.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rohan Das",
    role: "Product Manager, InnovateX",
    content: "Exceptional problem-solving skills and a keen eye for design. Kashif didn't just build what we asked for; he improved upon our initial concepts. The student portal he developed has streamlined our operations significantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  // Force reset carousel when data changes significantly
  useEffect(() => {
    if (api) {
      setCount(api.scrollSnapList().length);
      // If we just deleted the last item and it was selected, move back
      if (current > reviews.length) {
         api.scrollTo(reviews.length - 1);
      }
    }
  }, [reviews.length, api]); // Watch reviews.length specifically

  const allTestimonials = [
    ...initialTestimonials.map((t, i) => ({ ...t, id: `fixed-${i}`, isDeletable: false })),
    ...reviews.map(r => ({
      id: r.id, 
      name: r.name,
      role: r.role,
      content: r.content,
      image: r.imageUrl || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200",
      isDeletable: true 
    }))
  ];

  // Helper to compress image
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 300; // Reduced size for safer uploads
          const scaleSize = MAX_WIDTH / img.width;
          canvas.width = MAX_WIDTH;
          canvas.height = img.height * scaleSize;
          
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          resolve(canvas.toDataURL('image/jpeg', 0.6)); // Reduced quality slightly
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]); // Simplified dependency to avoid loop

  const form = useForm<InsertReview>({
    resolver: zodResolver(insertReviewSchema),
    defaultValues: {
      name: "",
      role: "",
      content: "",
      imageUrl: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertReview) => {
      // Clean up data: convert empty strings to undefined/null where appropriate
      const cleanData = {
        ...data,
        imageUrl: data.imageUrl || null, // Send null if empty string
      };
      const res = await apiRequest("POST", "/api/reviews", cleanData);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/reviews"] });
      toast({
        title: "Review Added",
        description: "Your review has been successfully added to the list!",
      });
      setOpen(false);
      form.reset();
    },
    onError: (error) => {
      console.error("Review submission error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to add review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/reviews/${id}`);
      return id; // Return ID to use in onSuccess
    },
    onSuccess: (deletedId) => {
      // 1. Manually update cache immediately to remove the item from UI
      queryClient.setQueryData(["/api/reviews"], (oldData: Review[] | undefined) => {
        return oldData ? oldData.filter(r => r.id !== deletedId) : [];
      });

      // 2. Invalidate to ensure sync with server
      queryClient.invalidateQueries({ queryKey: ["/api/reviews"] });

      toast({
        title: "Review Deleted",
        description: "The review has been removed.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to delete review.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InsertReview) {
    mutation.mutate(data);
  }

  return (
    <section id="testimonials" className="section bg-white py-0 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-20 relative z-10">
        
        {/* Continuous Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-[140px] w-0.5 bg-gray-200 -translate-x-1/2 hidden lg:block z-0"></div>

        {/* Title Box */}
        <div className="flex justify-center mb-12 lg:mb-20 pt-20 lg:pt-32 relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0083CD] border-2 border-[#0083CD] px-6 py-3 lg:px-8 lg:py-4 rounded-lg bg-white relative z-20 shadow-sm text-center">
            What my clients are saying?
          </h2>
        </div>

        {/* Carousel Area */}
        <div className="max-w-6xl mx-auto relative z-10">
          <Carousel
            key={allTestimonials.length} // Force re-mount when items change to prevent ghost slides
            setApi={setApi}
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {allTestimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="basis-full">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 lg:p-12 mx-4 lg:mx-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-h-[300px] relative z-20 group">
                    
                    {/* Delete Button (Only for dynamically added reviews) */}
                    {testimonial.isDeletable && (
                      <button
                        onClick={() => {
                          if (confirm("Are you sure you want to delete this review?")) {
                            deleteMutation.mutate(testimonial.id!);
                          }
                        }}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete Review"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}

                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center lg:text-left">
                      <Quote className="w-10 h-10 text-gray-200 mb-4 mx-auto lg:mx-0 fill-gray-100" />
                      <p className="text-gray-600 text-lg lg:text-xl leading-relaxed italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="text-[#0083CD] text-2xl font-bold mb-1">{testimonial.name}</h4>
                        <p className="text-gray-400 font-medium">{testimonial.role}</p>
                      </div>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows */}
            <div className="hidden lg:block absolute top-1/2 -left-16 -translate-y-1/2 z-30">
              <button 
                onClick={() => api?.scrollPrev()} 
                className="p-2 text-[#0083CD] hover:text-[#006096] transition-colors hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-16 h-16" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="hidden lg:block absolute top-1/2 -right-16 -translate-y-1/2 z-30">
              <button 
                onClick={() => api?.scrollNext()} 
                className="p-2 text-[#0083CD] hover:text-[#006096] transition-colors hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-16 h-16" strokeWidth={1.5} />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current - 1 ? "bg-[#0083CD] w-6" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </Carousel>
        </div>

        {/* CTA Button & Add Review */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16 relative z-10 bg-white pt-4 px-4 w-full max-w-lg mx-auto sm:max-w-none">
          <Button 
            className="w-full sm:w-auto bg-white text-[#0083CD] border-2 border-[#0083CD] hover:bg-[#0083CD] hover:text-white px-8 py-6 rounded-lg text-lg lg:text-xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's connect
          </Button>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="w-full sm:w-auto bg-[#0083CD] text-white border-2 border-[#0083CD] hover:bg-[#006096] px-8 py-6 rounded-lg text-lg lg:text-xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" /> Add Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add Your Review</DialogTitle>
                <DialogDescription>
                  Share your experience working with me. Your feedback is valuable!
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role & Company</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. CEO, TechCorp" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field: { value, onChange, ...fieldProps } }) => (
                      <FormItem>
                        <FormLabel>Profile Picture</FormLabel>
                        <FormControl>
                          <div className="flex items-center gap-4">
                            <Input
                              {...fieldProps}
                              type="file"
                              accept="image/*"
                              onChange={async (event) => {
                                const file = event.target.files && event.target.files[0];
                                if (file) {
                                  try {
                                    const compressedDataUrl = await compressImage(file);
                                    onChange(compressedDataUrl);
                                  } catch (error) {
                                    console.error("Image compression failed:", error);
                                    // Fallback to original file if compression fails (though risky size-wise)
                                    const reader = new FileReader();
                                    reader.onloadend = () => onChange(reader.result);
                                    reader.readAsDataURL(file);
                                  }
                                }
                              }}
                            />
                            {value && (
                              <img 
                                src={value} 
                                alt="Preview" 
                                className="w-12 h-12 rounded-full object-cover border border-gray-200" 
                              />
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Review</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your review here..." 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-[#0083CD] hover:bg-[#006096]" disabled={mutation.isPending}>
                    {mutation.isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Review
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </section>
  );
}
