import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Layout } from '@/components';
import { ENTRY_STATUS } from '@/utils/constants';

const Entry = () => {
  return (
    <Layout title=''>
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
        >
          <Card>
            <CardHeader
              title=''
              subheader=''
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                multiline
                placeholder='New Entry'
                autoFocus
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row>
                  {ENTRY_STATUS.map(option => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions sx={{ paddingX: 2 }}>
              <Button
                color='primary'
                variant='contained'
                fullWidth
                // onClick={handleSave}
                // disabled={description.length === 0}
              >
                <SaveIcon />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'error.dark' }}>
        <DeleteForeverIcon />
      </IconButton>
    </Layout>
  );
};

export default Entry;
