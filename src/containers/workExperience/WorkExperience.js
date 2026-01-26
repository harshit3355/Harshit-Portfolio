import React, { useContext } from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  const itemCount = 3;
  const [offset, setOffset] = React.useState(0);

  const handleNext = () => {
    if (offset + 3 < workExperiences.experience.length) {
      setOffset(offset + 3);
    }
  };

  const handlePrev = () => {
    if (offset - 3 >= 0) {
      setOffset(offset - 3);
    }
  };

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience
                  .slice(offset, offset + itemCount)
                  .map((card, i) => {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets
                        }}
                      />
                    );
                  })}
              </div>
              <div className="experience-pagination">
                <button
                  className="pagination-button"
                  onClick={handlePrev}
                  disabled={offset === 0}
                >
                  Previous
                </button>
                <button
                  className="pagination-button"
                  onClick={handleNext}
                  disabled={offset + 3 >= workExperiences.experience.length}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
