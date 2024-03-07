import { AxiosInstance } from "axios";
import {Nullable} from '../types/Nullable';

export class RickAndMortyApi {
  constructor(private instance: AxiosInstance) {}

  public async getCharacters(params?: ParamsType) {
    const res = await this.instance
        .get<ResponseType<CharacterType>>("/character", {params});
    return res.data;
  }

  public async getCharacter(id: string) {
    const res = await this.instance
        .get<CharacterType>(`/character/${id}`);
    return res.data;
  }

  public getLocations(params?: ParamsType) {
    return this.instance
      .get<ResponseType<LocationType>>("/location", { params })
      .then((res) => res.data);
  }

  public getLocation(id: string) {
    return this.instance
      .get<LocationType>(`/location/${id}`)
      .then((res) => res.data);
  }

  public async getEpisodes(params?: ParamsType) {
    const res = await this.instance
        .get<ResponseType<EpisodeType>>("/episode", {params});
    return res.data;
  }

  public getEpisode(id: string) {
    return this.instance
      .get<EpisodeType>(`/episode/${id}`)
      .then((res) => res.data);
  }
}

/**
 * types
 */
export type ResponseType<T> = {
  info: InfoType;
  results: T[];
};

type InfoType = {
  count: number;
  pages: number;
  next: Nullable<string>;
  prev: Nullable<string>;
};

export type CharacterType = {
  id: number;
  name: string;
  status: CharacterStatusType;
  species: string;
  type: string;
  gender: CharacterGenderType;
  origin: ExtraDataType;
  location: ExtraDataType;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type CharacterStatusType = "Alive" | "Dead" | "unknown";

type CharacterGenderType = "Female" | "Male" | "Genderless" | "unknown";

type ExtraDataType = {
  name: string;
  url: string;
};

type ParamsType = {
  page: number;
};
