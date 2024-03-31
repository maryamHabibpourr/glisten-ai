import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import ButtonLink from "@/components/ButtonLink";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
     data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center">
    <div className="relative">
    <StarGrid />
    {isFilled.richText(slice.primary.heading) && (
        <h1 className="text-balance text-5xl font-medium md:text-7xl">
          <PrismicText field={slice.primary.heading} />
        </h1>
      )}

    <PrismicRichText field={slice.primary.heading} />
    <PrismicRichText field={slice.primary.body} />
    <ButtonLink field={slice.primary.botton_link}>{slice.primary.button_label}</ButtonLink>
    {isFilled.image(slice.primary.image) && (
        <div className=" glass-container mt-16 w-fit">
          <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
          <PrismicNextImage
            className="rounded-lg"
            field={slice.primary.image}
            priority
            sizes="100vw"
          />
        </div>
      )}
    </div>
    </Bounded>
  );
};

export default Hero;
