import { ApolloError } from "@apollo/client";
import EpisodeModel from "./models/EpisodeModel";
import CharacterModel from "./models/CharacterModel";

export interface FetchEpisodesHookType {
  (): {
    loading: boolean;
    error: ApolloError | undefined;
  };
}

export interface EpisodesInfoType {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
  __typename: string;
}

export interface EpisodeResponseDataType {
  air_date: string;
  name: string;
  id: string;
  episode: string;
  created: string;
  __typename: string;
}

export interface EpisodeType {
  airDate: string;
  name: string;
  id: string;
  episode: string;
  created: string;
}

export interface EpisodesResponseDataType {
  info: EpisodesInfoType;
  results: EpisodeResponseDataType[];
}

export interface EpisodePropsType {
  setEpisodeId: React.Dispatch<React.SetStateAction<string | null>>;
  setShowEpisodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  episode: EpisodeModel;
}

export interface EpisodeModalPropsType {
  close: () => void;
  episodeId: string;
}

export interface FetchEpisodeHookType {
  (episodeId: string): {
    loading: boolean;
    error: ApolloError | undefined;
  };
}

export interface FetchCharactersHookType {
  (episodeId: string): {
    loading: boolean;
    error: ApolloError | undefined;
  };
}

export interface EpisodeDetailsPropsType {
  episodeId: string;
}

export interface CharactersPropsType {
  episodeId: string;
}

export interface CharacterDataResponseType {
  id: string;
  gender: string;
  image: string;
  name: string;
  status: string;
  __typename: string;
}

export interface CharacterPropsType {
  character: CharacterModel;
}

export interface FormatEpisodesType {
  (episodesData: EpisodeResponseDataType[]): EpisodeType[];
}

export interface GetCharactersSuccessFunctionType {
  (charactersData: CharacterDataResponseType[]): void;
}
export interface GetEpisodeSuccessFunctionType {
  (episodeData: EpisodeResponseDataType): void;
}
export interface GetEpisodesSuccessFunctionType {
  (episodesData: EpisodesResponseDataType): void;
}

export interface ReactElementFunctionType {
  (): React.ReactElement;
}

export interface VoidFunctionType {
  (): void;
}
