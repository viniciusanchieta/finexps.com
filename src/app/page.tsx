'use client';

import { GlobalLayoutTag } from '~/core/presentation/common/layouts';
import { HomePage } from '~/core/presentation/pages';

export default function Page() {
  return (
    <GlobalLayoutTag title='Cadastro'>
      <HomePage />
    </GlobalLayoutTag>
  );
}
