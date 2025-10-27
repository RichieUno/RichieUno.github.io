import { ReposData } from "@/data/repos";

export const featuredRepos = [
    "SightOverSite",
    "HighwayNavigation",
    "RWR"
    
] as (keyof typeof ReposData)[];

export const FeaturedRepoData = featuredRepos.map((key) => ReposData[key]);