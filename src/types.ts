import {
  ApolloError,
  ApolloQueryResult,
  FetchMoreQueryOptions,
  LazyQueryExecFunction,
  OperationVariables,
} from "@apollo/client";
import EpisodeModel from "./models/EpisodeModel";
import CharacterModel from "./models/CharacterModel";

export interface CharacterLocationType {
  id: string;
  name: string;
}
export interface CharacterOriginType {
  id: string;
  name: string;
}

export interface CharacterLocationResponseType {
  id: string;
  name: string;
}
export interface CharacterOriginResponseType {
  id: string;
  name: string;
}

export interface FetchEpisodesHookType {
  (): {
    fetchMoreLoading: boolean;
    loading: boolean;
    error: ApolloError | undefined;
    refetch: (
      variables?: Partial<OperationVariables> | undefined
    ) => Promise<ApolloQueryResult<any>>;
  };
}

export interface EpisodesTabPropsType {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

export interface EpisodesInfoType {
  count: number;
  next: number | null;
  pages: number;
  prev: number | null;
  __typename: string;
}

export interface CharacterIdDataResponseType {
  id: string;
  gender: string;
  image: string;
  name: string;
  status: string;
  __typename: string;
  origin: CharacterOriginResponseType;
  location: CharacterLocationResponseType;
}

export interface EpisodeResponseDataType {
  name: string;
  id: string;
  __typename: string;
}

export interface EpisodeDetailsResponseType {
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

export interface EpisodesPaginationType {
  totalPages: number;
  next: number | null;
  prev: number | null;
}

export interface EpisodesResponseDataType {
  info: EpisodesInfoType;
  results: EpisodeDetailsResponseType[];
}

export interface FetchMoreDataType {
  episodes: {
    info: EpisodesInfoType;
    results: EpisodeDetailsResponseType[];
  };
}

export interface EpisodePropsType {
  setEpisodeId: React.Dispatch<React.SetStateAction<string | null>>;
  setShowEpisodeModal: React.Dispatch<React.SetStateAction<boolean>>;
  episode: EpisodeModel;
}

export interface EpisodeModalPropsType {
  close: () => void;
  episodeId: string;
  currentPage: number;
}

export interface FetchEpisodeHookType {
  (episodeId: string, currentPage: number): {
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

export interface FetchCharacterByIdHookType {
  (): {
    loading: boolean;
    error: ApolloError | undefined;
    getCharacter: LazyQueryExecFunction<any, OperationVariables>;
  };
}

export interface EpisodeDetailsPropsType {
  episodeId: string;
  currentPage: number;
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
  handleFetchCharacter: (characterId: string) => void;
}

export interface FormatEpisodesType {
  (episodesData: EpisodeDetailsResponseType): EpisodeType;
}

export interface GetCharactersSuccessFunctionType {
  (charactersData: CharacterDataResponseType[]): void;
}
export interface GetEpisodeSuccessFunctionType {
  (episodeData: EpisodeDetailsResponseType, currentPage: number): void;
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

export interface CharacterDetailsModalProps {
  close: () => void;
  characterLoading: boolean;
  characterError: ApolloError | undefined;
  selectedCharacter: string;
}
