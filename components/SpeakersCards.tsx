import { blurUrl, speakersImg } from "data";
import Image from "next/image";

const Card = ({ src = "" }) => (
  <>
    <div className="relative mt-5 rounded-md flex  justify-center  ">
      <Image
        src={src}
        placeholder="blur"
        blurDataURL={blurUrl}
        alt="sponsor"
        width={300}
        height={300}
      />
    </div>
  </>
);
const SpeakersCards = () => {
  const speakers = speakersImg.map((speaker, i) => <Card src={speaker} />);

  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #122C47, #08131E 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto speakers-section ">
          <div className="mx-4 mt-20">
            <h3 className="text-4xl tracking-wide text-white text-center mb-24">
              Our <span className="font-bold">Speakers</span>
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 justify-center">
              {speakers}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersCards;
