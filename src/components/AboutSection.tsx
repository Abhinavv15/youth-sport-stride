import aboutImg from "@/assets/world sports academy image 1.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImg}
              alt="Coach guiding kids during training"
              className="w-full max-w-md mx-auto rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl text-blue-600">
              About Our <span className="text-blue-600">Academy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At World Sports Academy, we believe every child deserves the chance to develop
              discipline, fitness, confidence, and a lifelong love for sport — all while having fun.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our academy provides a safe and structured environment where young athletes
              learn from certified coaches in professional-grade facilities. Whether your child
              is picking up a paddle for the first time or training for competitive tournaments,
              we meet them where they are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
