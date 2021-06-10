if (document.getElementById('testcaseDiv') != null) 
   document.getElementById('testcaseDiv').innerHTML="Version: <a href='javascript:fallbackCopyTextToClipboard(\"-version d9391a63295cb2aac8c46c060189b26165a4d29a -test de.dagere.peass.ExampleBenchmarkClazz#calleeMethod\")'>d9391a63295cb2aac8c46c060189b26165a4d29a</a><br>Test Case: de.dagere.peass.ExampleBenchmarkClazz#calleeMethod<br><a href='de.dagere.peass.ExampleBenchmarkClazz_calleeMethod_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";

var source = {"current":
{
 "de.dagere.peass.ExampleBenchmarkClazz.calleeMethod_":
 `@Benchmark
public void calleeMethod() {
    new Callee().method1();
}`,"de.dagere.peass.Callee.<init>_":
 ``,"de.dagere.peass.Callee.innerMethod_":
 `private void innerMethod() {
    try {
        Thread.sleep(20);
    } catch (final InterruptedException e) {
        e.printStackTrace();
    }
}`,"de.dagere.peass.Callee.method1_":
 `protected void method1() {
    innerMethod();
}`,},
"old":
{
 "de.dagere.peass.ExampleBenchmarkClazz.calleeMethod_":
 `@Benchmark
public void calleeMethod() {
    new Callee().method1();
}`,"de.dagere.peass.Callee.<init>_":
 ``,"de.dagere.peass.Callee.innerMethod_":
 `private void innerMethod() {
    try {
        Thread.sleep(1);
    } catch (final InterruptedException e) {
        e.printStackTrace();
    }
}`,"de.dagere.peass.Callee.method1_":
 `protected void method1() {
    innerMethod();
}`,},
};
var treeData = [
{
  "call" : "de.dagere.peass.ExampleBenchmarkClazz#calleeMethod",
  "kiekerPattern" : "public void de.dagere.peass.ExampleBenchmarkClazz.calleeMethod()",
  "otherKiekerPattern" : "public void de.dagere.peass.ExampleBenchmarkClazz.calleeMethod()",
  "module" : "",
  "name" : "ExampleBenchmarkClazz#calleeMethod",
  "key" : "de.dagere.peass.ExampleBenchmarkClazz.calleeMethod_",
  "otherKey" : "de.dagere.peass.ExampleBenchmarkClazz.calleeMethod_",
  "parent" : null,
  "color" : "#FF0000",
  "statistic" : {
    "meanOld" : 1521.0,
    "meanCurrent" : 20723.833333333336,
    "deviationOld" : 363.0519170097363,
    "deviationCurrent" : 225.7454318474663,
    "vms" : 3,
    "callsOld" : 75,
    "calls" : 75,
    "tvalue" : -77.79939562452634,
    "change" : true
  },
  "hasSourceChange" : false,
  "state" : "SLOWER",
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 20568.833333333336, 20619.833333333336, 20982.833333333332 ],
  "valuesPredecessor" : [ 1305.8333333333335, 1317.0, 1940.1666666666667 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 20568.833333333336,
        "variance" : 186987.36666666664,
        "n" : 25,
        "max" : 21409.0,
        "min" : 20271.0,
        "sum" : 514220.8333333334,
        "standardDeviation" : 432.42035875599873
      } ],
      "1" : [ {
        "mean" : 20619.833333333336,
        "variance" : 78338.96666666666,
        "n" : 25,
        "max" : 21022.0,
        "min" : 20244.0,
        "sum" : 515495.8333333334,
        "standardDeviation" : 279.89099068506414
      } ],
      "2" : [ {
        "mean" : 20982.833333333332,
        "variance" : 933015.3666666666,
        "n" : 25,
        "max" : 22939.0,
        "min" : 20447.0,
        "sum" : 524570.8333333333,
        "standardDeviation" : 965.9272056768391
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 1305.8333333333335,
        "variance" : 55923.766666666685,
        "n" : 25,
        "max" : 1787.0,
        "min" : 1189.0,
        "sum" : 32645.833333333336,
        "standardDeviation" : 236.4820641542751
      } ],
      "1" : [ {
        "mean" : 1317.0,
        "variance" : 113070.4,
        "n" : 25,
        "max" : 2000.0,
        "min" : 1118.0,
        "sum" : 32925.0,
        "standardDeviation" : 336.25942365976897
      } ],
      "2" : [ {
        "mean" : 1940.1666666666667,
        "variance" : 1705557.3666666665,
        "n" : 25,
        "max" : 4534.0,
        "min" : 1166.0,
        "sum" : 48504.16666666667,
        "standardDeviation" : 1305.9698950077932
      } ]
    }
  },
  "children" : [ {
    "call" : "de.dagere.peass.Callee#<init>",
    "kiekerPattern" : "public new de.dagere.peass.Callee.<init>()",
    "otherKiekerPattern" : "public new de.dagere.peass.Callee.<init>()",
    "module" : "",
    "name" : "Callee#<init>",
    "key" : "de.dagere.peass.Callee.<init>_",
    "otherKey" : "de.dagere.peass.Callee.<init>_",
    "parent" : "de.dagere.peass.ExampleBenchmarkClazz#calleeMethod",
    "color" : null,
    "statistic" : {
      "meanOld" : 0.9999999999999999,
      "meanCurrent" : 1.9444444444444446,
      "deviationOld" : 0.28867513459481275,
      "deviationCurrent" : 1.9531550923607721,
      "vms" : 3,
      "callsOld" : 75,
      "calls" : 75,
      "tvalue" : -0.828529304008585
    },
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "values" : [ 0.5, 1.1666666666666665, 4.166666666666667 ],
    "valuesPredecessor" : [ 1.1666666666666665, 0.6666666666666667, 1.1666666666666665 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 0.5,
          "variance" : 0.7000000000000001,
          "n" : 25,
          "max" : 2.0,
          "min" : 0.0,
          "sum" : 12.5,
          "standardDeviation" : 0.8366600265340756
        } ],
        "1" : [ {
          "mean" : 1.1666666666666665,
          "variance" : 0.16666666666666666,
          "n" : 25,
          "max" : 2.0,
          "min" : 1.0,
          "sum" : 29.166666666666664,
          "standardDeviation" : 0.408248290463863
        } ],
        "2" : [ {
          "mean" : 4.166666666666667,
          "variance" : 0.5666666666666667,
          "n" : 25,
          "max" : 5.0,
          "min" : 3.0,
          "sum" : 104.16666666666667,
          "standardDeviation" : 0.752772652709081
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1.1666666666666665,
          "variance" : 0.16666666666666666,
          "n" : 25,
          "max" : 2.0,
          "min" : 1.0,
          "sum" : 29.166666666666664,
          "standardDeviation" : 0.408248290463863
        } ],
        "1" : [ {
          "mean" : 0.6666666666666667,
          "variance" : 0.2666666666666667,
          "n" : 25,
          "max" : 1.0,
          "min" : 0.0,
          "sum" : 16.666666666666668,
          "standardDeviation" : 0.5163977794943223
        } ],
        "2" : [ {
          "mean" : 1.1666666666666665,
          "variance" : 0.9666666666666666,
          "n" : 25,
          "max" : 3.0,
          "min" : 0.0,
          "sum" : 29.166666666666664,
          "standardDeviation" : 0.983192080250175
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "de.dagere.peass.Callee#method1",
    "kiekerPattern" : "protected void de.dagere.peass.Callee.method1()",
    "otherKiekerPattern" : "protected void de.dagere.peass.Callee.method1()",
    "module" : "",
    "name" : "Callee#method1",
    "key" : "de.dagere.peass.Callee.method1_",
    "otherKey" : "de.dagere.peass.Callee.method1_",
    "parent" : "de.dagere.peass.ExampleBenchmarkClazz#calleeMethod",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 1335.6666666666665,
      "meanCurrent" : 20336.666666666668,
      "deviationOld" : 335.17773063124463,
      "deviationCurrent" : 53.283049212046166,
      "vms" : 3,
      "callsOld" : 75,
      "calls" : 75,
      "tvalue" : -96.97114549770187,
      "change" : true
    },
    "hasSourceChange" : false,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "values" : [ 20280.5, 20386.5, 20343.0 ],
    "valuesPredecessor" : [ 1138.0, 1146.3333333333333, 1722.6666666666667 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 20280.5,
          "variance" : 22311.099999999864,
          "n" : 25,
          "max" : 20511.0,
          "min" : 20171.0,
          "sum" : 507012.5,
          "standardDeviation" : 149.36900615589522
        } ],
        "1" : [ {
          "mean" : 20386.5,
          "variance" : 23977.4999999999,
          "n" : 25,
          "max" : 20597.0,
          "min" : 20178.0,
          "sum" : 509662.5,
          "standardDeviation" : 154.84669838262585
        } ],
        "2" : [ {
          "mean" : 20343.0,
          "variance" : 1973.2,
          "n" : 25,
          "max" : 20391.0,
          "min" : 20272.0,
          "sum" : 508575.0,
          "standardDeviation" : 44.42071588797281
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1138.0,
          "variance" : 122.80000000000062,
          "n" : 25,
          "max" : 1150.0,
          "min" : 1126.0,
          "sum" : 28450.0,
          "standardDeviation" : 11.081516141756083
        } ],
        "1" : [ {
          "mean" : 1146.3333333333333,
          "variance" : 5155.466666666666,
          "n" : 25,
          "max" : 1282.0,
          "min" : 1068.0,
          "sum" : 28658.333333333332,
          "standardDeviation" : 71.8015784413314
        } ],
        "2" : [ {
          "mean" : 1722.6666666666667,
          "variance" : 1728682.2666666661,
          "n" : 25,
          "max" : 4405.0,
          "min" : 1118.0,
          "sum" : 43066.66666666667,
          "standardDeviation" : 1314.7936213211053
        } ]
      }
    },
    "children" : [ {
      "call" : "de.dagere.peass.Callee#innerMethod",
      "kiekerPattern" : "private void de.dagere.peass.Callee.innerMethod()",
      "otherKiekerPattern" : "private void de.dagere.peass.Callee.innerMethod()",
      "module" : "",
      "name" : "Callee#innerMethod",
      "key" : "de.dagere.peass.Callee.innerMethod_",
      "otherKey" : "de.dagere.peass.Callee.innerMethod_",
      "parent" : "de.dagere.peass.Callee#method1",
      "color" : "#FF0000",
      "statistic" : {
        "meanOld" : 1246.0,
        "meanCurrent" : 20141.055555555555,
        "deviationOld" : 296.66942882609254,
        "deviationCurrent" : 34.682822090312015,
        "vms" : 3,
        "callsOld" : 75,
        "calls" : 75,
        "tvalue" : -109.5691476029633,
        "change" : true
      },
      "hasSourceChange" : true,
      "state" : "SLOWER",
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "values" : [ 20107.0, 20176.333333333336, 20139.833333333332 ],
      "valuesPredecessor" : [ 1080.5, 1069.0, 1588.5 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 20107.0,
            "variance" : 1043.6000000000108,
            "n" : 25,
            "max" : 20153.0,
            "min" : 20080.0,
            "sum" : 502675.0,
            "standardDeviation" : 32.30479840519069
          } ],
          "1" : [ {
            "mean" : 20176.333333333336,
            "variance" : 4547.466666666665,
            "n" : 25,
            "max" : 20279.0,
            "min" : 20083.0,
            "sum" : 504408.3333333334,
            "standardDeviation" : 67.43490688557867
          } ],
          "2" : [ {
            "mean" : 20139.833333333332,
            "variance" : 62.966666666668786,
            "n" : 25,
            "max" : 20147.0,
            "min" : 20126.0,
            "sum" : 503495.8333333333,
            "standardDeviation" : 7.9351538527409025
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 1080.5,
            "variance" : 43.10000000000009,
            "n" : 25,
            "max" : 1086.0,
            "min" : 1068.0,
            "sum" : 27012.5,
            "standardDeviation" : 6.5650590248679475
          } ],
          "1" : [ {
            "mean" : 1069.0,
            "variance" : 317.59999999999974,
            "n" : 25,
            "max" : 1082.0,
            "min" : 1034.0,
            "sum" : 26725.0,
            "standardDeviation" : 17.821335527956364
          } ],
          "2" : [ {
            "mean" : 1588.5,
            "variance" : 1471150.3000000003,
            "n" : 25,
            "max" : 4064.0,
            "min" : 1074.0,
            "sum" : 39712.5,
            "standardDeviation" : 1212.909848257487
          } ]
        }
      },
      "children" : [ ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 340},
   width = 1000- margin.right - margin.left,
   height = 140 - margin.top - margin.bottom;
var kopemeData = [
{
  "call" : "overall",
  "kiekerPattern" : "public overall.overall()",
  "otherKiekerPattern" : "public overall.overall()",
  "module" : null,
  "name" : null,
  "key" : "overall.overall_",
  "otherKey" : "overall.overall_",
  "parent" : null,
  "color" : null,
  "statistic" : {
    "meanOld" : 295.39707555555555,
    "meanCurrent" : 4126.49504,
    "deviationOld" : 73.35573841148474,
    "deviationCurrent" : 30.703601679164763,
    "vms" : 9,
    "callsOld" : 45,
    "calls" : 45,
    "tvalue" : -144.5294299713771
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 4150.23028, 4185.28736, 4153.0221200000005, 4106.21328, 4126.4146, 4115.671079999999, 4090.6092000000003, 4113.26664, 4097.7408 ],
  "valuesPredecessor" : [ 404.14268, 334.84128, 247.25272000000004, 250.1404, 255.25356, 250.83288, 243.66576, 247.63879999999997, 424.80559999999997 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 4068.1096000000002,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4068.1096000000002,
        "min" : 4068.1096000000002,
        "sum" : 20340.548000000003,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4077.0386000000003,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4077.0386000000003,
        "min" : 4077.0386000000003,
        "sum" : 20385.193000000003,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4108.8732,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4108.8732,
        "min" : 4108.8732,
        "sum" : 20544.366,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4087.3276,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4087.3276,
        "min" : 4087.3276,
        "sum" : 20436.638,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4147.355,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4147.355,
        "min" : 4147.355,
        "sum" : 20736.774999999998,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 4056.2732,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4056.2732,
        "min" : 4056.2732,
        "sum" : 20281.366,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4092.5858,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4092.5858,
        "min" : 4092.5858,
        "sum" : 20462.929,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4117.8694,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4117.8694,
        "min" : 4117.8694,
        "sum" : 20589.346999999998,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4166.8704,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4166.8704,
        "min" : 4166.8704,
        "sum" : 20834.352,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4144.7566,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4144.7566,
        "min" : 4144.7566,
        "sum" : 20723.783,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 4125.3414,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4125.3414,
        "min" : 4125.3414,
        "sum" : 20626.707000000002,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4135.7744,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4135.7744,
        "min" : 4135.7744,
        "sum" : 20678.872000000003,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4152.7162,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4152.7162,
        "min" : 4152.7162,
        "sum" : 20763.581,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4191.8876,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4191.8876,
        "min" : 4191.8876,
        "sum" : 20959.438000000002,
        "standardDeviation" : 0.0
      }, {
        "mean" : 4159.391,
        "variance" : 0.0,
        "n" : 5,
        "max" : 4159.391,
        "min" : 4159.391,
        "sum" : 20796.954999999998,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 251.2634,
        "variance" : 0.0,
        "n" : 5,
        "max" : 251.2634,
        "min" : 251.2634,
        "sum" : 1256.317,
        "standardDeviation" : 0.0
      }, {
        "mean" : 242.92860000000002,
        "variance" : 0.0,
        "n" : 5,
        "max" : 242.92860000000002,
        "min" : 242.92860000000002,
        "sum" : 1214.643,
        "standardDeviation" : 0.0
      }, {
        "mean" : 242.96720000000002,
        "variance" : 0.0,
        "n" : 5,
        "max" : 242.96720000000002,
        "min" : 242.96720000000002,
        "sum" : 1214.836,
        "standardDeviation" : 0.0
      }, {
        "mean" : 260.0794,
        "variance" : 0.0,
        "n" : 5,
        "max" : 260.0794,
        "min" : 260.0794,
        "sum" : 1300.3970000000002,
        "standardDeviation" : 0.0
      }, {
        "mean" : 256.9258,
        "variance" : 0.0,
        "n" : 5,
        "max" : 256.9258,
        "min" : 256.9258,
        "sum" : 1284.629,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 328.82759999999996,
        "variance" : 0.0,
        "n" : 5,
        "max" : 328.82759999999996,
        "min" : 328.82759999999996,
        "sum" : 1644.138,
        "standardDeviation" : 0.0
      }, {
        "mean" : 328.3972,
        "variance" : 0.0,
        "n" : 5,
        "max" : 328.3972,
        "min" : 328.3972,
        "sum" : 1641.9859999999999,
        "standardDeviation" : 0.0
      }, {
        "mean" : 548.9472,
        "variance" : 0.0,
        "n" : 5,
        "max" : 548.9472,
        "min" : 548.9472,
        "sum" : 2744.736,
        "standardDeviation" : 0.0
      }, {
        "mean" : 584.3874000000001,
        "variance" : 0.0,
        "n" : 5,
        "max" : 584.3874000000001,
        "min" : 584.3874000000001,
        "sum" : 2921.9370000000004,
        "standardDeviation" : 0.0
      }, {
        "mean" : 333.4686,
        "variance" : 0.0,
        "n" : 5,
        "max" : 333.4686,
        "min" : 333.4686,
        "sum" : 1667.3429999999998,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 252.7954,
        "variance" : 0.0,
        "n" : 5,
        "max" : 252.7954,
        "min" : 252.7954,
        "sum" : 1263.977,
        "standardDeviation" : 0.0
      }, {
        "mean" : 248.3914,
        "variance" : 0.0,
        "n" : 5,
        "max" : 248.3914,
        "min" : 248.3914,
        "sum" : 1241.957,
        "standardDeviation" : 0.0
      }, {
        "mean" : 246.8042,
        "variance" : 0.0,
        "n" : 5,
        "max" : 246.8042,
        "min" : 246.8042,
        "sum" : 1234.021,
        "standardDeviation" : 0.0
      }, {
        "mean" : 241.7454,
        "variance" : 0.0,
        "n" : 5,
        "max" : 241.7454,
        "min" : 241.7454,
        "sum" : 1208.7269999999999,
        "standardDeviation" : 0.0
      }, {
        "mean" : 246.52720000000002,
        "variance" : 0.0,
        "n" : 5,
        "max" : 246.52720000000002,
        "min" : 246.52720000000002,
        "sum" : 1232.6360000000002,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
