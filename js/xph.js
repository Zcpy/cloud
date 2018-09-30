
// $("#main").height('580px');
// $("#main").width('1899px');
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
option = {
    color: ['#3aa1ff','#36cbcb', '#4ecb72', '#fbd336', '#f3627a','#975ee5','#3aa1ff'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        // x: 'right',
        // y:'center',
        itemGap:40,
        itemWidth:16,
        itemHight:16,
        // left:'right',
        right: '18%',
        top: 120,
        width:200,
        height:'',
        formatter: function(name) {
            var index = 0;
            var clientlabels = ['农特产品','原材料','机械装备','运输设备','生活用品','其它'];
            var clientcounts = [36,20,16,10,9,9];
            clientlabels.forEach(function(value,i){
                if(value == name) {
                    index = i;
                    // console.log(value.length);
                    // var k  = value.length;
                    // while (4 - k) {
                    //     clientlabels[index]=clientlabels[index]+"   ";
                    //     k++;
                    //
                    // }
                    // console.log(value.length);
                }
            });
            return '{a|'+clientlabels[index]+'}' + '{b|'+clientcounts[index]+'}'+"%";
        },
        textStyle:{
            color:'#666666',
            fontSize: '16',
            padding: [0, 0, 0, 10],
            formatter: function(name) {
                console.log(name);
                return '{a|'+name+'}';
            },
            rich: {
                a: {color: '#666',fontSize:16,width:100},
                b: {color: '#1874dc',fontSize:20},
            },

        },


    },
    series: [
        {
            name:'访问来源',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: '#fff',
                }
            },
            type:'pie',
            radius: ['50%', '62%'],
            avoidLabelOverlap: false,
            center:['32%', '50%'],
            label: {
                normal: {
                    show: true,
                    fontSize:16,
                    color:'#666',
                    // formatter: '{b}: {d}',
                    formatter: function(params) {
                        // console.log(params);
                        return '{a|'+params.name+'}'+'  {b|'+params.percent+'}'+'%';
                    },
                    rich: {
                        a: {color: '#666',fontSize:16},
                        b: {color: '#1874dc',fontSize:20},
                    }
                },

                // emphasis: {
                //     show: true,
                //     textStyle: {
                //         fontSize: '30',
                //         fontWeight: 'bold',
                //     }
                // }
            },
            labelLine: {
                normal: {
                    smooth: 0.1,
                    length: 30,
                    length2: 50
                }
            },
            data:[
                {value:36, name:'农特产品'},
                {value:20, name:'原材料'},
                {value:16, name:'机械装备'},
                {value:10, name:'运输设备'},
                {value:9, name:'生活用品'},
                {value:9, name:'其它'}
            ]
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
