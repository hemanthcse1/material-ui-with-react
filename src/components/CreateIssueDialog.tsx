import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Divider } from '@mui/material';
import { fetchActiveProjects, Project } from "../api/createIssueApi";
import LargeTestEditor from "./LargeTextEditor";


const issueTypes = ['Bug', 'Task', 'Technical Task', 'Story'];
const priorities = ['Low', 'Medium', 'High','Urgent','Blocker', 'Regulatory', 'Awaiting Prioritization'];
const categories = ['Engineering','Status Update', 'QR','Miscellaneous'];
const epicLists = ['DB Migration', 'Tech upgrade 2025', 'Nestly-product'];
const sprintList = ['Sprint-1', 'Sprint-2', 'Sprint-3']
const assignToList = ['Hemanth', 'Anil', 'Sharath', 'Hari'];
const reportToList = ['Raja', 'Rohit', 'Shafik'];

interface Props {
    open: boolean;
    onClose: () => void;
}

const CreateIssueDialog = ({open, onClose}: Props) => {

    const [projectOptions, setProjectOptions] = useState<Project[]>([]);
    const [selectedProjectName, setSelectedProjectName] = useState<string>('');
    const [issueTitle, setIssueTitle] = useState('')
    const [selectedPriority, setSelectedPriority] = useState<string>('')
    const [selectedEpic, setSelectedEpic] = useState<string>('')
    const [issueDescription, setIssueDescription] = useState('<p>This is a test description</p>')
    const [acceptanceCriteria, setAcceptanceCriteria] = useState('')
    const [sprintName, setSprintName] = useState('')
    const [storyPoints, setStoryPoints] = useState(0)
    const [assignedTo, setAssignedTo] = useState<string>('')
    const [reportTo, setReportTo] = useState()
    const [issueType, setIssueType] = useState('');
    const [activeTab, setActiveTab] = useState(0)

    const [errors, setErrors] = useState({
        selectedProjectName: '',
        issueType: '',
        issueTitle: '',
        issueDescription: '',
        acceptanceCriteria: '',
        sprintName: '',
        storyPoints: '',
        assignedTo: '',
        reportTo: ''
    })

    useEffect(() => {
        const getProjects = async () =>{
            try{
                const data = await fetchActiveProjects();
                setProjectOptions(data)
            }catch(error){
                console.log('failed to fetch projects',error)
            }
        }
        getProjects()
    }, [])

    const handleSubmit = () => {


    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth='md'>
            <Box sx={{px: 3, pt: 2, pb: 1}}>
                <Typography variant='h6' fontWeight='bold'>
                    Create issue
                </Typography>
            </Box>
            <DialogContent dividers sx={{pt: 1}}>
                <Typography variant='body2' color='text.secondary' mb={2} >
                    Required fields are marked with an asterisk <Typography component='span' color='error'>*</Typography>
                </Typography>

                <Box display='flex' alignItems='center' gap={2} mb={2}>
                    <Typography variant='h6' fontWeight='bold' width='250px' textAlign='right'>
                        Project<Typography component='span' color='error'>*</Typography>
                    </Typography>
                    <TextField 
                        select
                        label='Project'
                        value={selectedProjectName}
                        onChange={(e) => setSelectedProjectName(e.target.value)}
                        sx={{width: '300px'}}>
                            {projectOptions.map((proj) => (
                            <MenuItem key={proj.name} value={proj.name}>
                            {proj.name}
                             </MenuItem>
                            ))}
                    </TextField>
                </Box>

                <Box display='flex' alignItems='center' gap={2} mb={2}>
                    <Typography variant='h6' fontWeight='bold' width='250px' textAlign='right'>
                        Issue Type<Typography component='span' color='error'>*</Typography>
                    </Typography>
                    <TextField
                        select
                        label='Issue Type'
                        value={issueType}
                        onChange={(e) => setIssueType(e.target.value)}
                        sx={{width: '300px'}}>
                            {
                                issueTypes.map((type) => (
                                    <MenuItem key={type} value={type}>{type}</MenuItem>
                                ))
                            }
                    </TextField>
                </Box>
                
                 <Divider sx={{ mb: 2 }} /> 

                <Tabs
                    value={activeTab}
                    onChange={(e, newValue) => setActiveTab(newValue)}
                    sx={{mb: 2}}>
                        {categories.map((tab) => (
                            <Tab key={tab} label={tab} />
                        ))}
                </Tabs>

                {activeTab === 0 &&(

                    <>
                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                            <Typography variant='h6' fontWeight='bold' textAlign='right' width='250px'>
                                Title <Typography component='span' color='error'>*</Typography>
                            </Typography>

                            <TextField
                                required
                                type='text'
                                value={issueTitle}
                                sx={{width: '400px', mb: 2}}
                                onChange={(e) => setIssueTitle(e.target.value)}
                                error={Boolean(errors.issueTitle)}
                                helperText={errors.issueTitle}
                                variant='outlined'>
                            </TextField>
                        </Box>

                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                            <Typography variant='h6' fontWeight='bold' sx={{mb: 2}} textAlign='right' width='250px'>
                                Priority <Typography component='span' color='error'>*</Typography>
                            </Typography>

                            <TextField
                                select
                                label='Priority'
                                value={selectedPriority}
                                onChange={(e) => setSelectedPriority(e.target.value)}
                                sx={{width: '300px',mb: 2}}
                                variant="outlined"
                                >
                                {
                                    priorities.map((periorityType) => (
                                    <MenuItem key={periorityType} value={periorityType}>{periorityType}</MenuItem>
                                ))}
                            </TextField>
                        </Box>

                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                            <Typography variant='h6' fontWeight='bold' sx={{mb: 2}} textAlign='right' width='250px'>
                                Epic <Typography component='span' color='error'>*</Typography>
                            </Typography>

                            <TextField
                            select
                            label='Epic'
                            value={selectedEpic}
                            onChange={(e) => setSelectedEpic(e.target.value)}
                            sx={{width: '400px', mb: 2}}
                            variant='outlined'>
                                {
                                    epicLists.map((epic) => (
                                        <MenuItem key={epic} value={epic}>{epic}</MenuItem>
                                    ))
                                }
                            </TextField>
                        </Box>

                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                        <Typography variant="h6" fontWeight="bold" width="250px" textAlign="right" mt={1}>
                            Description <Typography component="span" color="error">*</Typography>
                        </Typography>
                        <Box sx={{ width: '400px' }}>
                            <LargeTestEditor
                                content={issueDescription}
                                onChange={setIssueDescription}
                                placeholder="Enter issue description..."
                            />
                        </Box>
                        </Box>

                        <Box display='flex' alignItems='top' gap={2} mb={2}>
                        <Typography variant="h6" fontWeight="bold" width="250px" textAlign="right" mt={1}>
                            Acceptance Criteria <Typography component="span" color="error">*</Typography>
                        </Typography>
                        <Box sx={{ width: '400px' }}>
                            <LargeTestEditor
                                content={acceptanceCriteria}
                                onChange={setAcceptanceCriteria}
                                placeholder="Enter acceptance criteria..."
                            />
                        </Box>
                        </Box>

                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                            <Typography variant='h6' fontWeight='bold' width='250px' textAlign='right' mt={1}>
                                Story Points <Typography component='span' color='error'>*</Typography>
                            </Typography>
                            <TextField
                                required
                                label='Story Points'
                                type="text"
                                value={storyPoints}
                                onChange={(e) => setIssueTitle(e.target.value)}
                                error={Boolean(errors.issueTitle)}
                                helperText={errors.issueTitle}
                                variant="outlined"
                                sx={{width: '300px' }}>
                            </TextField>
                        </Box>

                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                            <Typography variant="h6" fontWeight="bold" width='250px' textAlign='right' mt={1}>
                                Sprint Name ,<Typography component='span' color="error">*</Typography>
                            </Typography>
                            <TextField
                                select
                                label='Sprint Name'
                                value={sprintName}
                                onChange={(e) => setSprintName(e.target.validationMessage)}
                                variant="outlined"
                                sx={{width: '400px', mb: 2}}>
                                    {
                                        sprintList.map((sprint) => (
                                            <MenuItem key={sprint} value={sprint}>{sprint}</MenuItem>
                                        ))
                                    }
                            </TextField>
                        </Box>

                        <Box display='flex' alignItems='center' gap={2} mb={2}>
                            <Typography variant="h6" fontWeight='bold' width='250px' textAlign='right' mt={1}>
                                    Assign To <Typography component='span' color="error">*</Typography>
                            </Typography>
                            <Box>
                                    <TextField
                                    select
                                    label='Assigned To'
                                    value={assignedTo}
                                    onChange={(e) => setAssignedTo(e.target.value)}
                                    variant="outlined"
                                    sx={{width: '400px', mb: 2}}>
                                        {
                                            assignToList.map((assign) => (
                                                <MenuItem key={assign} value={assign}>{assign}</MenuItem>
                                            ))
                                        }
                                    </TextField>
                            </Box>
                        </Box>

                    </>
                )}



            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant='contained' onSubmit={handleSubmit}>Create</Button>
            </DialogActions>
        </Dialog>
    )

};

export default CreateIssueDialog;