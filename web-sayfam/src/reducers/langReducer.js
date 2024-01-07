import { Tr } from "../actions/langAction";
import { En } from "../actions/langAction";
import { FooterData } from "../data/FooterData";
import { trFooterData } from "../data/FooterData";
import { HeaderData } from "../data/HeaderData";
import { trHeaderData } from "../data/HeaderData";
import { InformationData } from "../data/InformationData";
import { trInformationData } from "../data/InformationData";
import { ProfileData } from "../data/ProfileData";
import { trProfileData } from "../data/ProfileData";
import { ProjectsData } from "../data/ProjectsData";
import { TrProjectsData } from "../data/ProjectsData";
import { SkillsData } from "../data/SkillsData";
import { trSkillsData } from "../data/SkillsData";
import { ProfileDataProps } from "../data/ProfileData";
import { trProfileDataProps } from "../data/ProfileData";

const stateInitial = {
  informationData: InformationData,
  profileData: ProfileData,
  projectsData: ProjectsData,
  skillsData: SkillsData,
  headerData: HeaderData,
  footerData: FooterData,
  profileDataProps: ProfileDataProps,
};

const languageReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case Tr:
      return {
        ...state,
        profileData: trProfileData,
        projectsData: TrProjectsData,
        skillsData: trSkillsData,
        footerData: trFooterData,
        headerData: trHeaderData,
        informationData: trInformationData,
        profileDataProps: trProfileDataProps,
      };

    case En:
      return {
        ...state,
        profileData: ProfileData,
        projectsData: ProjectsData,
        skillsData: SkillsData,
        footerData: FooterData,
        headerData: HeaderData,
        informationData: InformationData,
        profileDataProps: ProfileDataProps,
      };
    default:
      return state;
  }
};
export default languageReducer;
