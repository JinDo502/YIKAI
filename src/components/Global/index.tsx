'use client';

import { LANGUAGE_OPTIONS } from '@/common/constantStore';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import userStore from '@/store/userStore';
import { ArrowsDown, GlobalIcon } from '@/svg/common';
import { useTranslations } from 'next-intl';
import Cookies from 'js-cookie';
import { defaultLocale } from '@/i18n/config';

const Global = ({ form, className, iconClassName, globalIconClassName }: { form?: string; className?: string; iconClassName?: string; globalIconClassName?: string }) => {
  const { updateUserSettings, setUser, user } = userStore();
  const t = useTranslations('user');

  const handleChangeLocale = (value: string) => {
    updateUserSettings({ language: value as 'en-US' | 'zh-CN' });
    setUser({ ...user, language: value as 'en-US' | 'zh-CN' });
  };

  const locale = Cookies.get('NEXT_LOCALE') || defaultLocale;

  return (
    <Select value={locale} onValueChange={handleChangeLocale}>
      <SelectTrigger
        variant={form === 'user' ? 'ghost' : 'outline'}
        className={`w-max h-max gap-2 typography-body-1-bold ${className}`}
        icon={<ArrowsDown className={`${form === 'user' ? 'fill-white' : 'fill-primary'} h-6 w-6 ${iconClassName}`} />}
      >
        <GlobalIcon className={`${form === 'user' ? 'fill-white' : 'fill-primary'} h-6 w-6 hidden md:block ${globalIconClassName}`} />
        <SelectValue placeholder={t('selectLanguage')} />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGE_OPTIONS?.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            <span className='hidden md:block'>{item.label.web}</span>
            <span className='block md:hidden'>{item.label.mobile}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Global;
