import { AppBar, Avatar, Toolbar, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import { pathKeys } from '~shared/lib/react-router';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import { Button } from '~shared/components/ui/button';

export function Header() {
  return (
    <AppBar
      position="static"
      className="bg-white shadow  flex justify-between font-medium md:px-40 px-5"
    >
      <Toolbar className="flex justify-between w-full">
        <Link to={pathKeys.home()} className="flex items-center gap-1">
          <SchoolIcon className="text-tundora duration-500 hover:rotate-180" />
          <Typography className="font-semibold text-[20px] text-tundora">
            Bilimine
          </Typography>
        </Link>
        <div className="flex gap-5">
          <div className="hidden md:flex items-center space-x-6">
            <Button asChild>
            <Link
              to={pathKeys.ranking()}
            >
              <BarChartRoundedIcon />
              Рейтинг
            </Link>
            </Button>
            <Button asChild>
            <Link
              to={pathKeys.course.root()}
            >
              <LibraryBooksRoundedIcon />
              Предметы
            </Link>
            </Button>
            <Button asChild>
            <Link
              to={pathKeys.profile.badges()}
            >
              <EmojiEventsRoundedIcon />
              Достижения
            </Link>
            </Button>
          </div>
          <Tooltip title="Профиль">
            <Link to={pathKeys.profile.root()}>
              <Avatar src="" />
            </Link>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}
