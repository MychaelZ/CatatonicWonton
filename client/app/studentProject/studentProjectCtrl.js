angular.module('app')
  .controller('studentProjectCtrl', function studentProjectCtrl($scope, $sce, Project){

    $scope.project;
    $scope.currentPage;

    // PROJECT
    $scope.getProject = function() {
      Project.getProject().then(function(project){
        $scope.project = project;
        $scope.currentPage = project.Pages[0];
      });
    };

    $scope.changePage = function(pageIndex) {
      $scope.currentPage = $scope.project.Pages[pageIndex];
    };

    $scope.trustify = function(content) {
      return $sce.trustAsHtml(content);
    }

    // EXTRA: student input
    $scope.answerQuestion = function() {

    };

    $scope.getProject();

  });