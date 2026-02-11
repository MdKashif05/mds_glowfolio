import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Saatvik Nagpal",
    role: "Founder, EazyGrad",
    content: "Kashif is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the field of web development is indeed commendable.",
    image: "https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?semt=ais_user_personalization&w=740&q=80" // Professional Man
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "CTO, TechFlow Solutions",
    content: "Working with Kashif was an absolute pleasure. He transformed our outdated platform into a modern, high-performance web application. His expertise in the MERN stack is evident in every line of code.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" // Professional Woman
  },
  {
    id: 3,
    name: "Rohan Das",
    role: "Product Manager, InnovateX",
    content: "Exceptional problem-solving skills and a keen eye for design. Kashif didn't just build what we asked for; he improved upon our initial concepts. The student portal he developed has streamlined our operations significantly.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" // Man with glasses
  },
  {
    id: 4,
    name: "Arjun Verma",
    role: "Startup Founder",
    content: "I was impressed by how quickly Kashif understood our vision. He delivered a MVP that was not only functional but also beautifully designed. His communication was transparent throughout the project.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" // Man in suit
  },
  {
    id: 5,
    name: "Sarah Jenkins",
    role: "Creative Director, ArtSpace",
    content: "The portfolio website Kashif built for us is stunning. It captures our brand identity perfectly. The animations are smooth, and the site is incredibly responsive across all devices.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" // Woman smiling
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Lead Developer, SoftSystems",
    content: "Technical excellence at its best. Kashif writes clean, maintainable code and follows best practices. It was great collaborating with him on our internal dashboard backend integration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" // Man smiling
  }
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="basis-full">
                  <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 lg:p-12 mx-2 md:mx-4 lg:mx-12 border border-gray-100 flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 min-h-[300px] relative z-20 group transition-transform hover:-translate-y-1 duration-300">

                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-500"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center lg:text-left">
                      <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-gray-200 mb-4 mx-auto lg:mx-0 fill-gray-100" />
                      <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="text-[#0083CD] text-xl md:text-2xl font-bold mb-1">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm md:text-base font-medium">{testimonial.role}</p>
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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current - 1 ? "bg-[#0083CD] w-6" : "bg-gray-300"
                    }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16 relative z-10 bg-white pt-4 px-4 w-full max-w-lg mx-auto sm:max-w-none">
          <Button
            className="w-full sm:w-auto bg-white text-[#0083CD] border-2 border-[#0083CD] hover:bg-[#0083CD] hover:text-white px-8 py-6 rounded-lg text-lg lg:text-xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's connect
          </Button>
        </div>

      </div>
    </section>
  );
}
