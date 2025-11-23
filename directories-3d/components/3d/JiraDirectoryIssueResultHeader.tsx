'use client';

import {useState, useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import Link from 'next/link';
import {useFragment, graphql} from 'react-relay';
import {getSortInfoFromJql, getUrlWithNewJql} from '@/lib/utils';

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/20/solid';
import {JiraDirectoryIssueResultHeader_content$key} from '@/__generated__/JiraDirectoryIssueResultHeader_content.graphql';

const JiraDirectoryIssueResultHeader = ({
  content,
}: {
  content: JiraDirectoryIssueResultHeader_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectoryIssueResultHeader_content on JiraDirectoryIssueResultHeader {
        title
        isSortable
        sortKey
      }
    `,
    content,
  );
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const jqlParam = searchParams.get('jql');
  const [sortFieldValue, setSortFieldValue] = useState({
    sortKey: getSortInfoFromJql(jqlParam ?? '')[0],
    sortDirection: getSortInfoFromJql(jqlParam ?? '')[1],
  });
  useEffect(() => {
    const [sortKey, sortDirection] = [
      getSortInfoFromJql(jqlParam ?? '')[0],
      getSortInfoFromJql(jqlParam ?? '')[1],
    ];
    setSortFieldValue({
      sortKey,
      sortDirection,
    });
  }, [jqlParam, setSortFieldValue]);
  
  const currentPath = `${pathname}?${searchParams.toString()}`;
  
  return (
    <div className="flex items-left justify-between whitespace-nowrap">
      <b>{data?.title}</b>
      {data?.isSortable &&
        (sortFieldValue.sortDirection === 'DESC' &&
        sortFieldValue.sortKey === data?.sortKey ? (
          <Link
            href={
              sortFieldValue.sortKey === data?.sortKey
                ? getUrlWithNewJql(currentPath, data?.sortKey ?? '', 'ASC')
                : getUrlWithNewJql(currentPath, data?.sortKey ?? '', 'DESC')
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
                ? getUrlWithNewJql(currentPath, data?.sortKey ?? '', 'DESC')
                : getUrlWithNewJql(currentPath, data?.sortKey ?? '', 'ASC')
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

export default JiraDirectoryIssueResultHeader;
