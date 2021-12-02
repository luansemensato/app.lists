import React, { useState, useCallback, useMemo } from 'react';

import withLists from 'listsDashboard/withLists';

import Layout from 'components/Layout';
import Posts from 'listsDashboard/atomic/organisms/Posts';
import Albums from 'listsDashboard/atomic/organisms/Albums';

const ListsDashboardPage = () => {
  const tabs = useMemo(
    () => [
      {
        title: 'Posts',
        code: 'posts',
        content: <Posts />
      },
      {
        title: 'Albums',
        code: 'albums',
        content: <Albums />
      }
    ], []
  );

  const [activeTab, setActiveTab] = useState('posts');

  const handleTabChange = useCallback((code) => setActiveTab(code), []);

  const ActiveTabContent = useMemo(() => {
    const { content } = tabs?.find((tab) => tab.code === activeTab);

    return content;
  }, [activeTab, tabs]);

  return (
    <Layout>
      <div>
        {tabs?.map((item, index) => (
          <button key={index} onClick={() => handleTabChange(item.code)} style={{ margin: '0 10px' }}>
            {item.title}
          </button>
        ))}
      </div>

      {ActiveTabContent}
    </Layout>
  );
}

export default withLists(ListsDashboardPage);
