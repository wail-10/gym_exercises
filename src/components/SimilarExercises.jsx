import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        // <div>Similar Exercises</div>
        <Box sx={{mt: { lg: '100px', xs: '0'}}}>
            <Typography variant='h3' mb={5} mt={8}>Exercises that target the same muscle group</Typography>
            <Stack direction="column" sx={{p: '2', position: 'relative'}}>
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant='h3' mb={5} mt={8}>Exercises that use the same equipment</Typography>
            <Stack direction="column" sx={{p: '2', position: 'relative'}}>
                {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises