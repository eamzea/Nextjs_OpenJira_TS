import { UI_CONTEXT, toggleDragging } from '@/context/ui';
import { ENTRY_INTERFACE } from '@/types';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { DragEvent, useContext } from 'react';

interface EntryProps {
  entry: ENTRY_INTERFACE;
}

const Entry: React.FC<EntryProps> = ({ entry }) => {
  const { dispatch } = useContext(UI_CONTEXT)

  const handleDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('entry', entry._id);
    dispatch(toggleDragging())
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={handleDragStart}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography variant='body2'>15 min ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Entry;
