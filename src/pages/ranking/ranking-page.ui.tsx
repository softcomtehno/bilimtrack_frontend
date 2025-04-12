import React, { useState } from 'react';
// import { Tabs, Tab, Box } from '@mui/material';
import { Title } from '~shared/ui/title';
import { StudentsRanking } from '~widgets/students-ranking';
import { GroupsRanking } from '~widgets/groups-ranking';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '~shared/components/ui/tabs';

export function RankingPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 w-[500px]">
      <Title>Рейтинг и статистика</Title>

      <Tabs  defaultValue="by-group" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="by-group">
            По группам
          </TabsTrigger>
          <TabsTrigger className="w-full" value="by-student">
            По студентам
          </TabsTrigger>
        </TabsList>
        <TabsContent value="by-group">
          <GroupsRanking />
        </TabsContent>
        <TabsContent value="by-student">
          <StudentsRanking />
        </TabsContent>
      </Tabs>
    </div>
  );
}
