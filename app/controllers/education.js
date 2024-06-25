import Controller from '@ember/controller';

export default class EducationController extends Controller {
  educationDetails = [
    {
      title: 'MPhil Economics',
      institution: 'University of Cambridge',
      date: '09/2016 - 10/2017',
      description: [
        'Specialised in microeconomics, macroeconomics and econometrics.',
        'Dissertation on “Inequality and its Effect on Economic Growth”.',
      ],
      location: 'Cambridge, England',
    },
    {
      title: 'BSc Economics',
      institution: 'University of Essex',
      date: '09/2011 - 06/2014',
      description: [
        'Graduated with a First Class award, included in “Dean’s List” due to my exceptional results.',
        'Specialised in calculus, statistics and econometrics.',
        'Dissertation on “The Effects of Minimum Wages in Europe”.',
      ],
      location: 'Colchester, England',
    },
    {
      title: 'General Certificate of Education',
      institution: 'Costache Negruzzi National College',
      date: '09/2003 - 07/2011',
      description: [
        'Passed the Romanian Baccalaureate with a top grade (8.6 out of 10) at the subjects: Mathematics (9.5), Physics (8.1) and Romanian Literature (8.1)',
      ],
      location: 'Iasi, Romania',
    },
  ];
}
