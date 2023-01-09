import { HttpStatusCodeEnum } from '~/core/app/server';
import { UserMetadataCategoryEnum } from './add-user-metadata.enum';

export interface AddUserMetadata {
  run: (params: AddUserMetadata.Params) => Promise<AddUserMetadata.Response>;
}

export namespace AddUserMetadata {
  export type Params = {
    userId: string;
    code: string;
    category: UserMetadataCategoryEnum;
    expiresAt: Date;
  };

  export type Response = {
    statusCode: HttpStatusCodeEnum;
    code?: string;
  };
}
