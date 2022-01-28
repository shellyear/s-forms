module.exports = {
  '@graph': [
    {
      '@type': 'http://onto.fel.cvut.cz/ontologies/documentation/question',
      'http://onto.fel.cvut.cz/ontologies/form-layout/has-layout-class': 'form',
      'http://onto.fel.cvut.cz/ontologies/documentation/has_related_question': [
        {
          'http://onto.fel.cvut.cz/ontologies/form-layout/has-layout-class': ['wizard-step', 'section'],
          'http://www.w3.org/2000/01/rdf-schema#label': [
            {
              '@language': 'en',
              '@value': 'Description'
            },
            {
              '@language': 'cs',
              '@value': 'Popis'
            }
          ],
          'http://onto.fel.cvut.cz/ontologies/documentation/has_related_question': [
            {
              '@type': 'http://onto.fel.cvut.cz/ontologies/documentation/question',
              'http://onto.fel.cvut.cz/ontologies/form-layout/has-layout-class': ['textarea'],
              'http://www.w3.org/2000/01/rdf-schema#label': [
                {
                  '@language': 'en',
                  '@value': 'Description'
                },
                {
                  '@language': 'cs',
                  '@value': 'Popis'
                }
              ],
              'http://onto.fel.cvut.cz/ontologies/documentation/has_answer': {
                '@type': 'http://onto.fel.cvut.cz/ontologies/documentation/answer',
                'http://onto.fel.cvut.cz/ontologies/documentation/has_data_value': ''
              }
            }
          ]
        }
      ]
    }
  ]
};
