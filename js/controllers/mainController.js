app.controller('mainController', ['$scope', '$http', function($scope, $http) {

    $scope.loading = true;
    $scope.listDisaster = {};
    $scope.totalDisaster = "";
    $scope.select = {
        area: ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        category: ['民生、基礎設施災情', '路樹災情', '積淹水災情', '廣告招牌災情', '環境汙染', '道路、隧道災情', '建物毀損', '其他災情']
    }

    $http.get("http://tonyq.org/kptaipei/GetDisasterSummary-20150808.php")
        .success(function(data) {
            $scope.loading = null;
            $scope.totalDisaster = data.DataSet["diffgr:diffgram"][0].NewDataSet[0].CASE_SUMMARY.length
            $scope.listDisaster = data.DataSet["diffgr:diffgram"][0].NewDataSet[0].CASE_SUMMARY

        });

}]);
