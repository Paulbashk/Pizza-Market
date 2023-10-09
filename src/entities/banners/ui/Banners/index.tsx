import React from 'react';

// services
import { bannerSelect } from '@/entities/banners/services/banners';

// components
import { Loader, withQueryResolver } from '@/shared/ui';
import { BannerSlider } from '@/entities/banners/ui';

// assets
import * as S from './styled';

const Banners = () => {
  const WithQueryBanners = withQueryResolver(BannerSlider, {
    actionName: 'fetchBanners',
    arg: {},
    selector: bannerSelect.queryState,
  })(
    <S.WrapperLoader>
      <Loader />
    </S.WrapperLoader>,
  );

  return <WithQueryBanners />;
};

export default Banners;
