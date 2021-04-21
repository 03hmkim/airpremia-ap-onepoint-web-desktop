import { isMobile } from '@airpremia/core/lib/util';

export const getEvent = (data: any) => {
  return {
    id: data.id,
    title: data.title,
    startDate: data.startDate,
    endDate: data.endDate,
    thumbnailUrl: isMobile()
      ? data.mobileSubImageUrl
      : data.desktopSubImageUrl,
    thumbnailMainUrl: isMobile()
      ? data.mobileMainImageUrl
      : data.desktopMainImageUrl,
    dDay: Math.abs(data.ddays),
    labels: [] as ('apply-end' | 'selecting')[],
  };
};

export const getEvents = (data: any[]) => {
  return data.map(getEvent);
};
