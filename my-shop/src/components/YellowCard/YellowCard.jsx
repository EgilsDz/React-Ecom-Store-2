import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { YellowCardStyles } from './YellowCardStyles';

function YellowCard({ icon, title, description }) {
    const Icon = icon
    return (
        <div>
            <Card sx={YellowCardStyles.card}>
                <CardContent>
                    <Icon sx={YellowCardStyles.icons} />
                    <Typography variant="body1" sx={YellowCardStyles.title}>{title}</Typography>
                    <Typography variant="body2" sx={YellowCardStyles.disc}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default YellowCard