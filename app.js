var app = angular.module('whatsappApp', []);
    
    app.controller('LinkController', function($scope) {
      $scope.numero = '';
      $scope.mensagem = '';
      $scope.linkGerado = '';
      $scope.linkVisivel = false;

      $scope.gerarLink = function() {
        if ($scope.numero) {
          var numeroFormatado = $scope.numero.replace(/\D/g, '');
          var mensagemFormatada = encodeURIComponent($scope.mensagem);
          $scope.linkGerado = `https://wa.me/${numeroFormatado}?text=${mensagemFormatada}`;
          $scope.linkVisivel = true;
        }
      };
      
      $scope.copiarLink = function() {
        navigator.clipboard.writeText($scope.linkGerado).then(function() {
          alert('Link copiado!');
        });
      };
    });