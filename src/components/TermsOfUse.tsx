import React from "react";

interface Props {
  terms: {
    title: string;
    description: string;
    slides: {
      title: string;
      number: string;
      texts: string[];
    }[];
  }[];
  selectedTermIndex: number;
}

const TermsOfUse = ({ terms, selectedTermIndex }: Props) => {
  return (
    <div className="overflow-y-scroll custom-scrollbar">
      <div className="pb-5 border-b border-white">
        <p className="font-bold text-2xl mb-4">
          {terms[selectedTermIndex].title}
        </p>
        <p className="text-lg pr-4">{terms[selectedTermIndex].description}</p>
      </div>

      <div className="h-full py-[10px] border-b border-white">
        <ol className="flex flex-col gap-3">
          {terms[selectedTermIndex].slides.map((slide, index) => (
            <li key={index} className="flex gap-2">
              <span>{slide.number}.</span>
              <div className="">
                <p>{slide.title}</p>

                {slide.texts.length > 0 && (
                  <ul className="flex flex-col gap-3 pl-4">
                    {slide.texts.map((text, index) => (
                      <li key={index} className="list-disc">
                        <p>{text}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TermsOfUse;
