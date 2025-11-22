'use client';

import {useState, useEffect, ChangeEvent} from 'react';
import {useRouter, usePathname, useSearchParams} from 'next/navigation';
import {useFragment, graphql} from 'react-relay';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import {JiraDirectoryJqlBuilderAdvancedCriteria_content$key} from '../../__generated__/JiraDirectoryJqlBuilderAdvancedCriteria_content.graphql';

const JiraDirectoryJqlBuilderAdvancedCriteria = ({
  content,
}: {
  content: JiraDirectoryJqlBuilderAdvancedCriteria_content$key;
}) => {
  const data = useFragment(
    graphql`
      fragment JiraDirectoryJqlBuilderAdvancedCriteria_content on JiraDirectoryJqlBuilderAdvancedCriteria {
        type
        jql
      }
    `,
    content,
  );

  const [jql, setJql] = useState(data?.jql || '');
  const [debouncedJql, setDebouncedJql] = useState(jql);
  const [userChanged, setUserChanged] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlJql = searchParams.get('jql') || '';
    setJql(urlJql);
    setDebouncedJql(urlJql);
    setUserChanged(false);
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedJql(jql);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [jql]);

  useEffect(() => {
    const currentJql = searchParams.get('jql');

    if (userChanged && currentJql !== debouncedJql && debouncedJql !== null) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.set('jql', debouncedJql);
      router.push(`${pathname}?${newSearchParams.toString()}`);
    }
  }, [debouncedJql, router, pathname, searchParams, userChanged]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJql(event.target.value);
    setUserChanged(true);
  };

  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="text"
        id="jql-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="JQL Search"
        required
        value={jql || ''}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default JiraDirectoryJqlBuilderAdvancedCriteria;
