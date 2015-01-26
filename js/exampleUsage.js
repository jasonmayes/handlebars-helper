/**
 * Example usage
 */

// This data could have come from some AJAX request somewere else for example.
var data = {
  name: 'Jason',
  pageName: 'Demo Page',
  comments: [
    {comment: 'Example comment 1'},
    {comment: 'Example comment 2'},
    {comment: 'Example comment 3'},
    {comment: 'Example comment 4'},
    {comment: 'Example comment 5'},
  ]
};

handlebarsHelper.populateTemplate('myHeader', 'templates/header.template', data);
handlebarsHelper.populateTemplate('myBody', 'templates/body.template', data);
handlebarsHelper.populateTemplate('myFooter', 'templates/footer.template', data);
