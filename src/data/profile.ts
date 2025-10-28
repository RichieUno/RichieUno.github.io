import {
    FaLinkedin,
    FaRegIdBadge,
    FaGithub,
} from "react-icons/fa6";
import profileImage from "../assets/profilePic.jpeg";
import resumePdf from "../assets/CV_RichardKuhlmann.pdf"; 


export const UserInfo = {
    name: "Richard Kuhlmann",
    profile_url: profileImage, 
    headline: "Robotics Student at ETH Zürich",
    email: "rkuhlann@ethz.ch",
    links: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/richard-kuhlmann-7b6936210",
            icon: FaLinkedin,
        },
        // {
        //     name: "Google Scholar",
        //     url: "https://scholar.google.com.tw/citations?user=nQdpH2MAAAAJ",
        //     icon: FaGoogleScholar,
        // },
        {
            name: "Résumé",
            url: resumePdf,
            icon: FaRegIdBadge,
        },
        {
            name: "Github",
            url: "https://github.com/RichieUno",
            icon: FaGithub,
        },
        // {
        //     name: "Facebook",
        //     url: "https://www.facebook.com/pyhuang97",
        //     icon: FaSquareFacebook,
        // },
    ],
    // you can use HTML syntax here (e.g. <br/>, <a>, <strong>, ...)
    biography: `
        Hi, nice to meet you! I am Richard, and currently pursuing a MS in Robotics, Systems and Control at ETH Zürich. After studying a wide background of courses, I am now focused on robot learning from demonstrations - e.g. Imitation Learning or Adversarial Reinforement Learning.
        <div class="my-2"></div>
        Outside of work, I enjoy being in the nature - running, hiking, and sometimes taking an ice bath!
    `
}