import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Alert,
  CircularProgress,
  Typography
} from '@mui/material';
import { Person, Email, School } from '@mui/icons-material';
import { useCourseRegistration } from '../context/CourseRegistrationContext';

// Available courses for registration
const availableCourses = [
  { id: 1, name: 'Matematik', title: 'Matematik', description: 'Grundläggande matematik för gymnasiet.' },
  { id: 2, name: 'Programmering', title: 'Programmering', description: 'Introduktion till programmering och problemlösning.' },
  { id: 3, name: 'Historia', title: 'Historia', description: 'Världshistoria från antiken till nutid.' }
];

export default function CourseRegistrationDialog({ open, onClose, preselectedCourseId = null }) {
  const { registerCourse, loading } = useCourseRegistration();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseId: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Update courseId when preselectedCourseId changes
  useEffect(() => {
    if (preselectedCourseId) {
      setFormData(prev => ({
        ...prev,
        courseId: String(preselectedCourseId)
      }));
    }
  }, [preselectedCourseId]);

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Namn är obligatoriskt';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Namnet måste vara minst 2 tecken';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-post är obligatorisk';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ogiltig e-postadress';
    }

    if (!formData.courseId) {
      newErrors.courseId = 'Du måste välja en kurs';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const selectedCourse = availableCourses.find(course => String(course.id) === String(formData.courseId));
      
      if (selectedCourse) {
        // Add student info to the course object
        const courseWithStudentInfo = {
          ...selectedCourse,
          studentInfo: {
            name: formData.name,
            email: formData.email,
            registrationDate: new Date().toISOString()
          }
        };
        
        registerCourse(courseWithStudentInfo);
        setSuccess(true);
        
        // Close dialog after success message
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      courseId: preselectedCourseId ? String(preselectedCourseId) : ''
    });
    setErrors({});
    setSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  const selectedCourse = availableCourses.find(course => String(course.id) === String(formData.courseId));

  if (success) {
    return (
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ textAlign: 'center', py: 4 }}>
          <School sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom color="success.main">
            Registrering lyckades!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Du är nu registrerad för kursen {selectedCourse?.name}.
          </Typography>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <School sx={{ mr: 2, color: 'primary.main' }} />
          Kursregistrering
        </Box>
      </DialogTitle>
      
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {preselectedCourseId && (
            <Alert severity="info" sx={{ mb: 3 }}>
              <Typography variant="body2">
                <strong>Vald kurs:</strong> {availableCourses.find(c => String(c.id) === String(preselectedCourseId))?.name}
              </Typography>
            </Alert>
          )}
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Fyll i formuläret nedan för att registrera dig för en kurs.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Namn"
              variant="outlined"
              fullWidth
              required
              value={formData.name}
              onChange={handleInputChange('name')}
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />
              }}
            />

            <TextField
              label="E-post"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />
              }}
            />

            <FormControl fullWidth required error={!!errors.courseId}>
              <InputLabel>Välj kurs</InputLabel>
              <Select
                value={formData.courseId}
                onChange={handleInputChange('courseId')}
                label="Välj kurs"
              >
                {availableCourses.map((course) => (
                  <MenuItem key={course.id} value={String(course.id)}>
                    <Box>
                      <Typography variant="body1">{course.name}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {course.description}
                      </Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
              {errors.courseId && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                  {errors.courseId}
                </Typography>
              )}
            </FormControl>

            {selectedCourse && (
              <Alert severity="info">
                <Typography variant="body2">
                  <strong>Vald kurs:</strong> {selectedCourse.name}
                  <br />
                  {selectedCourse.description}
                </Typography>
              </Alert>
            )}
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button 
            onClick={handleClose} 
            disabled={isSubmitting}
            variant="outlined"
          >
            Avbryt
          </Button>
          <Button 
            type="submit" 
            variant="contained"
            disabled={isSubmitting || loading}
            startIcon={isSubmitting ? <CircularProgress size={20} /> : <School />}
          >
            {isSubmitting ? 'Registrerar...' : 'Registrera'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
