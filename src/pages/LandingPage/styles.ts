import styled from 'styled-components';
import RecruitmentWallpaper from '../../assets/recruitment-wallpaper.png';
import BackgroundGMap from '../../assets/background-gmaps.jpg';

export const Container = styled.section``

export const ContactBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #16a0bf;
  height: 50px;
  color: white;
  padding: 0 30px;
`

export const ContactBarComumContacts = styled.div`

  display: flex;
  align-items: center;

  svg {
    margin-top: 2px;
  }
`

export const ContactBarComumContactsText = styled.span`
  margin-left: 4px;
`

export const ContactBarComumContactsSeparator = styled.div`
  background: #fff;
  opacity: 0.5;
  width: 1px;
  height: 14px;
  margin: 3px 14px 0 14px;

`
export const ContactBarSocialMedia = styled.div`
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;

  svg {
    cursor: pointer;
  }
`

export const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 10px;
`

export const Menu = styled.ul`
  display: flex;  
  align-items: center;
  margin: 0;
  min-width: 50%;
`

export const MenuItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 0 24px;
`

export const MenuItemLink = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;


  &:hover {
   &::after {
     width: 100%;
   } 
  }

  &::after {
    content: '';
    background: #40a9ff;
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 1.5px;
    width: 0%;
    margin-top: 5px;
    transition: 0.3s
  }
`

export const Wallpaper = styled.div`
  position: relative;
  height: calc(100vh);
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
  color: white;

  &::before {
    content: '';
    position: absolute;;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${RecruitmentWallpaper}) no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(0.5);
    z-index: -1;
  }
`

export const SignInSignUpBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 12px;

  button {
    height: 36px;
  }

`

export const WallpaperTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  width: 60%;
  color: inherit;
`
export const WallpaperDescription = styled.h2`
  font-size: 36px;
  font-weight: 100;
  width: 60%;
  color: #eee;
`

export const WallpaperSubDescription = styled
export const ButtonBar = styled.div`
  display: grid;
  grid-row: 1;
  grid-template-columns: max-content max-content;
  grid-column-gap: 16px;
  width: 60%;
`

export const Apresentation = styled.div`
  height: 100vh;
  width: 100%;
`

export const ForCandidates = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px;
`

export const ForCandidatesTitle = styled.h2`
  font-size: 36px;
`

export const ForCandidatesMenu = styled.ul`
  display: flex;
  flex-direction: column;
`

export const ForCandidatesMenuItem = styled.li`
  list-style-type: none;
  font-size: 24px;
`

export const ForCompany = styled.div``

export const BoxPlansForCompanies = styled.div`
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
  background: #fafafa;
  padding: 16px 16px 64px 16px;
`
export const BoxPlansForCompaniesTitle = styled.span`
  grid-column: 1 / 4;
  justify-self: center;
  font-size: 48px;
  color: #555;
  margin-bottom: 10px;
`

export const BoxPlansForCandidates = styled.div`
  display: grid;
  grid-row: 1;
  grid-template-columns: 1fr;
  grid-column-gap: 16px;
  background: #f5f6fa;
  padding: 16px 16px 64px 16px;
`
export const BoxPlansForCandidatesTitle = styled.span`
  grid-column: 1 / 4;
  justify-self: center;
  font-size: 48px;
  color: #555;
  margin-bottom: 10px;
`
export const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  color: #ccc;
  padding: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${BackgroundGMap}) no-repeat center;
    background-size: cover;
    z-index: -1;
    filter: brightness(0.1);
  }
`

export const ContactSectionTitle = styled.h1`
  font-size: 64px;
  font-weight: 100;
  color: #ccc;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  &::after {
    content: '';
    height: 2px;
    width: 70px;
    margin-top: 5px;
    background: #1e94d2;
    opacity: 0.6;
  }
`

export const ContactSectionSubtitle = styled.span`
  font-size: 20px;
`

export const ContactSectionItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: #1e94d2;
    font-size: 24px;
    margin-bottom: 4px;
  }
`

export const ContactSectionItemName = styled.span`
  font-size: 18px;
`
export const ContactSectionItemValue = styled.span`
  font-size: 14px;
  max-width: 210px;
  text-align: center;
`

export const ContactSectionFormWrapper = styled.div`

  padding: 12px 16px;
  width: 60%;

  form {
    display: flex;
    flex-direction: column;
    
    & > div {
      border-color: #646464;
    }

    & > button {
      align-self: center
    }
  }
`

export const Footer = styled.footer`
  background: white;
  padding: 24px;
`

export const FooterTitle = styled.h1`
  font-size: 64px;
  color: #565656;
`
export const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    font-size: 32px;

    & + svg {
      margin: 0 8px;
    }
  }
`

export const FooterCopyRight = styled.span`
  font-size: 14px;
  align-self: center;
`