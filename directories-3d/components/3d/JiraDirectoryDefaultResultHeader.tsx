'use client';

import {useState, useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import Link from 'next/link';
import {useFragment, graphql} from 'react-relay';

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/20/solid';
import {JiraDirectoryDefaultResultHeader_content$key} from '@/__generated__/JiraDirectoryDefaultResultHeader_content.graphql';

const getUrl = (pathname: string, currentSearchParams: URLSearchParams, sortKey: string, sortDirection: string) => {
  const url = new URL('https://temp.com' + pathname);
  currentSearchParams.forEach((value, key) => {
    url.searchParams.set(key, value);
  });
  let hasUpdates = false;
  if (url.searchParams.get('sortKey') !== sortKey) {
    url.searchParams.set('sortKey', sortKey);
    hasUpdates = true;
  }
  if (url.searchParams.get('sortOrder') !== sortDirection) {
    url.searchParams.set('sortOrder', sortDirection);
    hasUpdates = true;
  }
  if (hasUpdates) {
    url.searchParams.set('page', '1');
  }
  return `${url.pathname}?${url.searchParams.toString()}`;
};

const JiraDirectoryDefaultResultHeader = ({
  content,
}: {
  content: JiraDirectoryDefaultResultHeader_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectoryDefaultResultHeader_content on JiraDirectoryDefaultResultHeader {
        title
        isSortable
        sortDirection
        sortKey
      }
    `,
    content,
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sortFieldValue, setSortFieldValue] = useState({
    sortKey: searchParams.get('sortKey') ?? '',
    sortDirection: searchParams.get('sortOrder') ?? '',
  });
  useEffect(() => {
    const [sortKey, sortDirection] = [
      searchParams.get('sortKey') ?? 'name',
      searchParams.get('sortOrder') ?? 'ASC',
    ];
    setSortFieldValue({
      sortKey,
      sortDirection,
    });
  }, [searchParams, setSortFieldValue]);
  return (
    <div className="flex items-left justify-between whitespace-nowrap">
      <b>{data?.title}</b>
      {data?.isSortable &&
        (sortFieldValue.sortDirection === 'DESC' &&
        sortFieldValue.sortKey === data?.sortKey ? (
          <Link
            href={
              sortFieldValue.sortKey === data?.sortKey
                ? getUrl(pathname, searchParams, data?.sortKey ?? '', 'ASC')
                : getUrl(pathname, searchParams, data?.sortKey ?? '', 'DESC')
            }
            className="w-5 flex items-center">
            <ArrowUpCircleIcon
              className={`${
                sortFieldValue.sortKey === data?.sortKey
                  ? 'text-blue-400'
                  : 'text-gray-400'
              }`}
              aria-hidden="true"
            />
          </Link>
        ) : (
          <Link
            href={
              sortFieldValue.sortKey === data?.sortKey
                ? getUrl(pathname, searchParams, data.sortKey ?? '', 'DESC')
                : getUrl(pathname, searchParams, data.sortKey ?? '', 'ASC')
            }
            className="w-5 flex items-center">
            <ArrowDownCircleIcon
              className={`${
                sortFieldValue.sortKey === data.sortKey
                  ? 'text-blue-400'
                  : 'text-gray-400'
              }`}
              aria-hidden="true"
            />
          </Link>
        ))}
    </div>
  );
};

export default JiraDirectoryDefaultResultHeader;
