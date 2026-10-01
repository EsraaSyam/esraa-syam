import SparkleIcon from "@/components/SparkleIcon";

export default function QuoteBlock() {
  return (
    <section className="quote-section section-wrap">
      <div className="quote-orb" />
      <div className="quote-line" />
      <blockquote>
        “The best way to predict the future is to build it.”
      </blockquote>
      <SparkleIcon size={19} />
    </section>
  );
}
