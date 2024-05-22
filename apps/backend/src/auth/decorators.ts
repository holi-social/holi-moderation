import { SetMetadata } from '@nestjs/common';

export enum Metadata {
  IS_PUBLIC = 'isPublic',
}

export const Public = () => SetMetadata(Metadata.IS_PUBLIC, true);
