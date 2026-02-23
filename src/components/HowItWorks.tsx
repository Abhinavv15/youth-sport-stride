const steps = [
  {
    number: "1",
    title: "Choose Your Sport",
    description: "Pick from Table Tennis or Squash based on your child's interest.",
  },
  {
    number: "2",
    title: "Click Booking",
    description: "Hit the booking button to be taken to our secure registration page.",
  },
  {
    number: "3",
    title: "Complete Registration",
    description: "Finish sign-up on ActivePass and you're all set!",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">
            How <span className="text-primary">Booking</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Getting started is simple — just three easy steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-800 text-primary-foreground">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Bookings are securely handled via <strong className="text-foreground">ActivePass</strong>.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
