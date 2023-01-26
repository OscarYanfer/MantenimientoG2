from django import forms
from ckeditor.widgets import CKEditorWidget

from classroom.models import Course, Category, Grade


## Seria recomendable reestructurar la clase de meta para poder organizar mejor las definiciones de campos y widgets, se define las opciones de día de forma explicita y se especifica los campos requeridos.

'''
class NewCourseForm(forms.ModelForm):
	picture = forms.ImageField(required=False)
	title = forms.CharField(widget=forms.TextInput(attrs={'class': 'validate'}), required=True)
	description = forms.CharField(widget=forms.TextInput(attrs={'class': 'validate'}), required=True)
	day = forms.ChoiceField(choices=Course.DAY_CHOICES, required=True)
	time_start = forms.TimeField(widget=forms.TimeInput(format='%H:%M'), required=True)
	time_end = forms.TimeField(widget=forms.TimeInput(format='%H:%M'), required=True)
	category = forms.ModelChoiceField(queryset=Category.objects.all())
	syllabus = forms.CharField()

	class Meta:
		model = Course
		fields = ('picture', 'title', 'description', 'day', 'time_start', 'time_end', 'category', 'syllabus')
'''

class NewCourseForm(forms.ModelForm): 
	picture = forms.ImageField(required=False)
	title = forms.CharField(widget=forms.TextInput(attrs={'class': 'validate'}), required=True)
	description = forms.CharField(widget=forms.TextInput(attrs={'class': 'validate'}), required=True)
	day = forms.ChoiceField(choices=Course.DAY_CHOICES, required=True)
	time_start = forms.TimeField(widget=forms.TimeInput(format='%H:%M'), required=True)
	time_end = forms.TimeField(widget=forms.TimeInput(format='%H:%M'), required=True)
	category = forms.ModelChoiceField(queryset=Category.objects.all())
	syllabus = forms.CharField(DAY_CHOICES = Course.DAY_CHOICES) 
	class Meta: 
		model = Course 
		fields = ('picture', 'title', 'description', 'day', 'time_start', 'time_end', 'category', 'syllabus') 
		widgets = { 'day': forms.Select(attrs={'class': 'validate'}), 'time_start': forms.TimeInput(attrs={'class': 'validate', 'format': '%H:%M'}), 'time_end': forms.TimeInput(attrs={'class': 'validate', 'format': '%H:%M'}), } 
		required = { 'title': True, 'description': True, 'day': True, 'time_start': True, 'time_end': True, } 
		



class NewGradeForm(forms.ModelForm):
	grade = forms.IntegerField(widget=forms.NumberInput(attrs={'class': 'validate'}))

	class Meta:
		model = Grade
		fields = ('grade',)