window.DATASETS = {
  "sep": {
    "fixed": "20260805_t1",
    "beforeLabel": "Centroid translation",
    "afterLabel": "Rigid (bone/landmark)",
    "cases": [
      {
        "id": "20260109_t1",
        "day": "20260109",
        "take": 1,
        "series": "20260109_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260109_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260109_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.905→0.931; Spleen 0.864→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026010901,
        "summary": "20260109_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90533,
            "after": 0.93137
          },
          "spleen": {
            "before": 0.86381,
            "after": 0.96585
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260109_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260109_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260109_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260109_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260109_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260109_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260109_t1/aorta_coronal_before.jpg",
                "after": "assets/20260109_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260109_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260109_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260109_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260109_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260109_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260109_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260109_t1/spleen_coronal_before.jpg",
                "after": "assets/20260109_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260109_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3697,
            "centroid": 0.1381
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3144,
            "centroid": 0.348
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260109_t2",
        "day": "20260109",
        "take": 2,
        "series": "20260109_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260109_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s75",
        "title": "20260109_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.883→0.927; Spleen 0.852→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026010902,
        "summary": "20260109_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88262,
            "after": 0.92658
          },
          "spleen": {
            "before": 0.85198,
            "after": 0.96049
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260109_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260109_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260109_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260109_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260109_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260109_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260109_t2/aorta_coronal_before.jpg",
                "after": "assets/20260109_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260109_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260109_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260109_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260109_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260109_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260109_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260109_t2/spleen_coronal_before.jpg",
                "after": "assets/20260109_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260109_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3969,
            "centroid": 0.4151
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3819,
            "centroid": 0.5429
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260109_t3",
        "day": "20260109",
        "take": 3,
        "series": "20260109_t3",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260109_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s84",
        "title": "20260109_t3",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.906→0.932; Spleen 0.863→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026010903,
        "summary": "20260109_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90581,
            "after": 0.93154
          },
          "spleen": {
            "before": 0.86271,
            "after": 0.96498
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260109_t3/aorta_axial_0_before.jpg",
                "after": "assets/20260109_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260109_t3/aorta_axial_1_before.jpg",
                "after": "assets/20260109_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260109_t3/aorta_axial_2_before.jpg",
                "after": "assets/20260109_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260109_t3/aorta_coronal_before.jpg",
                "after": "assets/20260109_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260109_t3/spleen_axial_0_before.jpg",
                "after": "assets/20260109_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260109_t3/spleen_axial_1_before.jpg",
                "after": "assets/20260109_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260109_t3/spleen_axial_2_before.jpg",
                "after": "assets/20260109_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260109_t3/spleen_coronal_before.jpg",
                "after": "assets/20260109_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260109_t3/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3688,
            "centroid": 0.3018
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3236,
            "centroid": 0.3895
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260114_t1",
        "day": "20260114",
        "take": 1,
        "series": "20260114_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260114_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260114_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.892→0.918; Spleen 0.959→0.957.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026011401,
        "summary": "20260114_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.8916,
            "after": 0.91794
          },
          "spleen": {
            "before": 0.95921,
            "after": 0.9572
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260114_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260114_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260114_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260114_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260114_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260114_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260114_t1/aorta_coronal_before.jpg",
                "after": "assets/20260114_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260114_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260114_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260114_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260114_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260114_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260114_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260114_t1/spleen_coronal_before.jpg",
                "after": "assets/20260114_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260114_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4379,
            "centroid": 0.1259
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4273,
            "centroid": 0.6005
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260122_t1",
        "day": "20260122",
        "take": 1,
        "series": "20260122_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260122_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260122_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.903→0.930; Spleen 0.943→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026012201,
        "summary": "20260122_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90336,
            "after": 0.93046
          },
          "spleen": {
            "before": 0.94261,
            "after": 0.96694
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260122_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260122_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260122_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260122_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260122_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260122_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260122_t1/aorta_coronal_before.jpg",
                "after": "assets/20260122_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260122_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260122_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260122_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260122_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260122_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260122_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260122_t1/spleen_coronal_before.jpg",
                "after": "assets/20260122_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260122_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3732,
            "centroid": 0.2796
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3108,
            "centroid": 0.3265
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "medium",
        "day": "20260128",
        "take": 1,
        "series": "20260128_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260128_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "İyi iyileşen",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Dengeli kazanç",
        "note": "Rigid, 0128’de Aorta’yı toparlıyor; Spleen’deki kazanç daha büyük.",
        "featured": true,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026012801,
        "summary": "20260128_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90252,
            "after": 0.92274
          },
          "spleen": {
            "before": 0.92874,
            "after": 0.96493
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/medium/aorta_axial_0_before.jpg",
                "after": "assets/medium/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/medium/aorta_axial_1_before.jpg",
                "after": "assets/medium/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/medium/aorta_axial_2_before.jpg",
                "after": "assets/medium/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/medium/aorta_coronal_before.jpg",
                "after": "assets/medium/aorta_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 27",
                "before": "assets/medium/aorta_all_27_before.jpg",
                "after": "assets/medium/aorta_all_27_after.jpg"
              },
              {
                "label": "z 28",
                "before": "assets/medium/aorta_all_28_before.jpg",
                "after": "assets/medium/aorta_all_28_after.jpg"
              },
              {
                "label": "z 29",
                "before": "assets/medium/aorta_all_29_before.jpg",
                "after": "assets/medium/aorta_all_29_after.jpg"
              },
              {
                "label": "z 30",
                "before": "assets/medium/aorta_all_30_before.jpg",
                "after": "assets/medium/aorta_all_30_after.jpg"
              },
              {
                "label": "z 31",
                "before": "assets/medium/aorta_all_31_before.jpg",
                "after": "assets/medium/aorta_all_31_after.jpg"
              },
              {
                "label": "z 32",
                "before": "assets/medium/aorta_all_32_before.jpg",
                "after": "assets/medium/aorta_all_32_after.jpg"
              },
              {
                "label": "z 33",
                "before": "assets/medium/aorta_all_33_before.jpg",
                "after": "assets/medium/aorta_all_33_after.jpg"
              },
              {
                "label": "z 34",
                "before": "assets/medium/aorta_all_34_before.jpg",
                "after": "assets/medium/aorta_all_34_after.jpg"
              },
              {
                "label": "z 35",
                "before": "assets/medium/aorta_all_35_before.jpg",
                "after": "assets/medium/aorta_all_35_after.jpg"
              },
              {
                "label": "z 36",
                "before": "assets/medium/aorta_all_36_before.jpg",
                "after": "assets/medium/aorta_all_36_after.jpg"
              },
              {
                "label": "z 37",
                "before": "assets/medium/aorta_all_37_before.jpg",
                "after": "assets/medium/aorta_all_37_after.jpg"
              },
              {
                "label": "z 38",
                "before": "assets/medium/aorta_all_38_before.jpg",
                "after": "assets/medium/aorta_all_38_after.jpg"
              },
              {
                "label": "z 39",
                "before": "assets/medium/aorta_all_39_before.jpg",
                "after": "assets/medium/aorta_all_39_after.jpg"
              },
              {
                "label": "z 40",
                "before": "assets/medium/aorta_all_40_before.jpg",
                "after": "assets/medium/aorta_all_40_after.jpg"
              },
              {
                "label": "z 41",
                "before": "assets/medium/aorta_all_41_before.jpg",
                "after": "assets/medium/aorta_all_41_after.jpg"
              },
              {
                "label": "z 42",
                "before": "assets/medium/aorta_all_42_before.jpg",
                "after": "assets/medium/aorta_all_42_after.jpg"
              },
              {
                "label": "z 43",
                "before": "assets/medium/aorta_all_43_before.jpg",
                "after": "assets/medium/aorta_all_43_after.jpg"
              },
              {
                "label": "z 44",
                "before": "assets/medium/aorta_all_44_before.jpg",
                "after": "assets/medium/aorta_all_44_after.jpg"
              },
              {
                "label": "z 45",
                "before": "assets/medium/aorta_all_45_before.jpg",
                "after": "assets/medium/aorta_all_45_after.jpg"
              },
              {
                "label": "z 46",
                "before": "assets/medium/aorta_all_46_before.jpg",
                "after": "assets/medium/aorta_all_46_after.jpg"
              },
              {
                "label": "z 47",
                "before": "assets/medium/aorta_all_47_before.jpg",
                "after": "assets/medium/aorta_all_47_after.jpg"
              },
              {
                "label": "z 48",
                "before": "assets/medium/aorta_all_48_before.jpg",
                "after": "assets/medium/aorta_all_48_after.jpg"
              },
              {
                "label": "z 49",
                "before": "assets/medium/aorta_all_49_before.jpg",
                "after": "assets/medium/aorta_all_49_after.jpg"
              },
              {
                "label": "z 50",
                "before": "assets/medium/aorta_all_50_before.jpg",
                "after": "assets/medium/aorta_all_50_after.jpg"
              },
              {
                "label": "z 51",
                "before": "assets/medium/aorta_all_51_before.jpg",
                "after": "assets/medium/aorta_all_51_after.jpg"
              },
              {
                "label": "z 52",
                "before": "assets/medium/aorta_all_52_before.jpg",
                "after": "assets/medium/aorta_all_52_after.jpg"
              },
              {
                "label": "z 53",
                "before": "assets/medium/aorta_all_53_before.jpg",
                "after": "assets/medium/aorta_all_53_after.jpg"
              },
              {
                "label": "z 54",
                "before": "assets/medium/aorta_all_54_before.jpg",
                "after": "assets/medium/aorta_all_54_after.jpg"
              },
              {
                "label": "z 55",
                "before": "assets/medium/aorta_all_55_before.jpg",
                "after": "assets/medium/aorta_all_55_after.jpg"
              },
              {
                "label": "z 56",
                "before": "assets/medium/aorta_all_56_before.jpg",
                "after": "assets/medium/aorta_all_56_after.jpg"
              },
              {
                "label": "z 57",
                "before": "assets/medium/aorta_all_57_before.jpg",
                "after": "assets/medium/aorta_all_57_after.jpg"
              },
              {
                "label": "z 58",
                "before": "assets/medium/aorta_all_58_before.jpg",
                "after": "assets/medium/aorta_all_58_after.jpg"
              },
              {
                "label": "z 59",
                "before": "assets/medium/aorta_all_59_before.jpg",
                "after": "assets/medium/aorta_all_59_after.jpg"
              },
              {
                "label": "z 60",
                "before": "assets/medium/aorta_all_60_before.jpg",
                "after": "assets/medium/aorta_all_60_after.jpg"
              },
              {
                "label": "z 61",
                "before": "assets/medium/aorta_all_61_before.jpg",
                "after": "assets/medium/aorta_all_61_after.jpg"
              },
              {
                "label": "z 62",
                "before": "assets/medium/aorta_all_62_before.jpg",
                "after": "assets/medium/aorta_all_62_after.jpg"
              },
              {
                "label": "z 63",
                "before": "assets/medium/aorta_all_63_before.jpg",
                "after": "assets/medium/aorta_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/medium/aorta_all_64_before.jpg",
                "after": "assets/medium/aorta_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/medium/aorta_all_65_before.jpg",
                "after": "assets/medium/aorta_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/medium/aorta_all_66_before.jpg",
                "after": "assets/medium/aorta_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/medium/aorta_all_67_before.jpg",
                "after": "assets/medium/aorta_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/medium/aorta_all_68_before.jpg",
                "after": "assets/medium/aorta_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/medium/aorta_all_69_before.jpg",
                "after": "assets/medium/aorta_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/medium/aorta_all_70_before.jpg",
                "after": "assets/medium/aorta_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/medium/aorta_all_71_before.jpg",
                "after": "assets/medium/aorta_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/medium/aorta_all_72_before.jpg",
                "after": "assets/medium/aorta_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/medium/aorta_all_73_before.jpg",
                "after": "assets/medium/aorta_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/medium/aorta_all_74_before.jpg",
                "after": "assets/medium/aorta_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/medium/aorta_all_75_before.jpg",
                "after": "assets/medium/aorta_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/medium/aorta_all_76_before.jpg",
                "after": "assets/medium/aorta_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/medium/aorta_all_77_before.jpg",
                "after": "assets/medium/aorta_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/medium/aorta_all_78_before.jpg",
                "after": "assets/medium/aorta_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/medium/aorta_all_79_before.jpg",
                "after": "assets/medium/aorta_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/medium/aorta_all_80_before.jpg",
                "after": "assets/medium/aorta_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/medium/aorta_all_81_before.jpg",
                "after": "assets/medium/aorta_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/medium/aorta_all_82_before.jpg",
                "after": "assets/medium/aorta_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/medium/aorta_all_83_before.jpg",
                "after": "assets/medium/aorta_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/medium/aorta_all_84_before.jpg",
                "after": "assets/medium/aorta_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/medium/aorta_all_85_before.jpg",
                "after": "assets/medium/aorta_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/medium/aorta_all_86_before.jpg",
                "after": "assets/medium/aorta_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/medium/aorta_all_87_before.jpg",
                "after": "assets/medium/aorta_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/medium/aorta_all_88_before.jpg",
                "after": "assets/medium/aorta_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/medium/aorta_all_89_before.jpg",
                "after": "assets/medium/aorta_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/medium/aorta_all_90_before.jpg",
                "after": "assets/medium/aorta_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/medium/aorta_all_91_before.jpg",
                "after": "assets/medium/aorta_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/medium/aorta_all_92_before.jpg",
                "after": "assets/medium/aorta_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/medium/aorta_all_93_before.jpg",
                "after": "assets/medium/aorta_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/medium/aorta_all_94_before.jpg",
                "after": "assets/medium/aorta_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/medium/aorta_all_95_before.jpg",
                "after": "assets/medium/aorta_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/medium/aorta_all_96_before.jpg",
                "after": "assets/medium/aorta_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/medium/aorta_all_97_before.jpg",
                "after": "assets/medium/aorta_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/medium/aorta_all_98_before.jpg",
                "after": "assets/medium/aorta_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/medium/aorta_all_99_before.jpg",
                "after": "assets/medium/aorta_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/medium/aorta_all_100_before.jpg",
                "after": "assets/medium/aorta_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/medium/aorta_all_101_before.jpg",
                "after": "assets/medium/aorta_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/medium/aorta_all_102_before.jpg",
                "after": "assets/medium/aorta_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/medium/aorta_all_103_before.jpg",
                "after": "assets/medium/aorta_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/medium/aorta_all_104_before.jpg",
                "after": "assets/medium/aorta_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/medium/aorta_all_105_before.jpg",
                "after": "assets/medium/aorta_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/medium/aorta_all_106_before.jpg",
                "after": "assets/medium/aorta_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/medium/aorta_all_107_before.jpg",
                "after": "assets/medium/aorta_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/medium/aorta_all_108_before.jpg",
                "after": "assets/medium/aorta_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/medium/aorta_all_109_before.jpg",
                "after": "assets/medium/aorta_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/medium/aorta_all_110_before.jpg",
                "after": "assets/medium/aorta_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/medium/aorta_all_111_before.jpg",
                "after": "assets/medium/aorta_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/medium/aorta_all_112_before.jpg",
                "after": "assets/medium/aorta_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/medium/aorta_all_113_before.jpg",
                "after": "assets/medium/aorta_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/medium/aorta_all_114_before.jpg",
                "after": "assets/medium/aorta_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/medium/aorta_all_115_before.jpg",
                "after": "assets/medium/aorta_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/medium/aorta_all_116_before.jpg",
                "after": "assets/medium/aorta_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/medium/aorta_all_117_before.jpg",
                "after": "assets/medium/aorta_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/medium/aorta_all_118_before.jpg",
                "after": "assets/medium/aorta_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/medium/aorta_all_119_before.jpg",
                "after": "assets/medium/aorta_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/medium/aorta_all_120_before.jpg",
                "after": "assets/medium/aorta_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/medium/aorta_all_121_before.jpg",
                "after": "assets/medium/aorta_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/medium/aorta_all_122_before.jpg",
                "after": "assets/medium/aorta_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/medium/aorta_all_123_before.jpg",
                "after": "assets/medium/aorta_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/medium/aorta_all_124_before.jpg",
                "after": "assets/medium/aorta_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/medium/aorta_all_125_before.jpg",
                "after": "assets/medium/aorta_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/medium/aorta_all_126_before.jpg",
                "after": "assets/medium/aorta_all_126_after.jpg"
              },
              {
                "label": "z 127",
                "before": "assets/medium/aorta_all_127_before.jpg",
                "after": "assets/medium/aorta_all_127_after.jpg"
              },
              {
                "label": "z 128",
                "before": "assets/medium/aorta_all_128_before.jpg",
                "after": "assets/medium/aorta_all_128_after.jpg"
              },
              {
                "label": "z 129",
                "before": "assets/medium/aorta_all_129_before.jpg",
                "after": "assets/medium/aorta_all_129_after.jpg"
              },
              {
                "label": "z 130",
                "before": "assets/medium/aorta_all_130_before.jpg",
                "after": "assets/medium/aorta_all_130_after.jpg"
              },
              {
                "label": "z 131",
                "before": "assets/medium/aorta_all_131_before.jpg",
                "after": "assets/medium/aorta_all_131_after.jpg"
              },
              {
                "label": "z 132",
                "before": "assets/medium/aorta_all_132_before.jpg",
                "after": "assets/medium/aorta_all_132_after.jpg"
              },
              {
                "label": "z 133",
                "before": "assets/medium/aorta_all_133_before.jpg",
                "after": "assets/medium/aorta_all_133_after.jpg"
              },
              {
                "label": "z 134",
                "before": "assets/medium/aorta_all_134_before.jpg",
                "after": "assets/medium/aorta_all_134_after.jpg"
              },
              {
                "label": "z 135",
                "before": "assets/medium/aorta_all_135_before.jpg",
                "after": "assets/medium/aorta_all_135_after.jpg"
              },
              {
                "label": "z 136",
                "before": "assets/medium/aorta_all_136_before.jpg",
                "after": "assets/medium/aorta_all_136_after.jpg"
              },
              {
                "label": "z 137",
                "before": "assets/medium/aorta_all_137_before.jpg",
                "after": "assets/medium/aorta_all_137_after.jpg"
              },
              {
                "label": "z 138",
                "before": "assets/medium/aorta_all_138_before.jpg",
                "after": "assets/medium/aorta_all_138_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/medium/spleen_axial_0_before.jpg",
                "after": "assets/medium/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/medium/spleen_axial_1_before.jpg",
                "after": "assets/medium/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/medium/spleen_axial_2_before.jpg",
                "after": "assets/medium/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/medium/spleen_coronal_before.jpg",
                "after": "assets/medium/spleen_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 63",
                "before": "assets/medium/spleen_all_63_before.jpg",
                "after": "assets/medium/spleen_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/medium/spleen_all_64_before.jpg",
                "after": "assets/medium/spleen_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/medium/spleen_all_65_before.jpg",
                "after": "assets/medium/spleen_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/medium/spleen_all_66_before.jpg",
                "after": "assets/medium/spleen_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/medium/spleen_all_67_before.jpg",
                "after": "assets/medium/spleen_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/medium/spleen_all_68_before.jpg",
                "after": "assets/medium/spleen_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/medium/spleen_all_69_before.jpg",
                "after": "assets/medium/spleen_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/medium/spleen_all_70_before.jpg",
                "after": "assets/medium/spleen_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/medium/spleen_all_71_before.jpg",
                "after": "assets/medium/spleen_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/medium/spleen_all_72_before.jpg",
                "after": "assets/medium/spleen_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/medium/spleen_all_73_before.jpg",
                "after": "assets/medium/spleen_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/medium/spleen_all_74_before.jpg",
                "after": "assets/medium/spleen_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/medium/spleen_all_75_before.jpg",
                "after": "assets/medium/spleen_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/medium/spleen_all_76_before.jpg",
                "after": "assets/medium/spleen_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/medium/spleen_all_77_before.jpg",
                "after": "assets/medium/spleen_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/medium/spleen_all_78_before.jpg",
                "after": "assets/medium/spleen_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/medium/spleen_all_79_before.jpg",
                "after": "assets/medium/spleen_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/medium/spleen_all_80_before.jpg",
                "after": "assets/medium/spleen_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/medium/spleen_all_81_before.jpg",
                "after": "assets/medium/spleen_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/medium/spleen_all_82_before.jpg",
                "after": "assets/medium/spleen_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/medium/spleen_all_83_before.jpg",
                "after": "assets/medium/spleen_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/medium/spleen_all_84_before.jpg",
                "after": "assets/medium/spleen_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/medium/spleen_all_85_before.jpg",
                "after": "assets/medium/spleen_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/medium/spleen_all_86_before.jpg",
                "after": "assets/medium/spleen_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/medium/spleen_all_87_before.jpg",
                "after": "assets/medium/spleen_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/medium/spleen_all_88_before.jpg",
                "after": "assets/medium/spleen_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/medium/spleen_all_89_before.jpg",
                "after": "assets/medium/spleen_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/medium/spleen_all_90_before.jpg",
                "after": "assets/medium/spleen_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/medium/spleen_all_91_before.jpg",
                "after": "assets/medium/spleen_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/medium/spleen_all_92_before.jpg",
                "after": "assets/medium/spleen_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/medium/spleen_all_93_before.jpg",
                "after": "assets/medium/spleen_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/medium/spleen_all_94_before.jpg",
                "after": "assets/medium/spleen_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/medium/spleen_all_95_before.jpg",
                "after": "assets/medium/spleen_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/medium/spleen_all_96_before.jpg",
                "after": "assets/medium/spleen_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/medium/spleen_all_97_before.jpg",
                "after": "assets/medium/spleen_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/medium/spleen_all_98_before.jpg",
                "after": "assets/medium/spleen_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/medium/spleen_all_99_before.jpg",
                "after": "assets/medium/spleen_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/medium/spleen_all_100_before.jpg",
                "after": "assets/medium/spleen_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/medium/spleen_all_101_before.jpg",
                "after": "assets/medium/spleen_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/medium/spleen_all_102_before.jpg",
                "after": "assets/medium/spleen_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/medium/spleen_all_103_before.jpg",
                "after": "assets/medium/spleen_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/medium/spleen_all_104_before.jpg",
                "after": "assets/medium/spleen_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/medium/spleen_all_105_before.jpg",
                "after": "assets/medium/spleen_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/medium/spleen_all_106_before.jpg",
                "after": "assets/medium/spleen_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/medium/spleen_all_107_before.jpg",
                "after": "assets/medium/spleen_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/medium/spleen_all_108_before.jpg",
                "after": "assets/medium/spleen_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/medium/spleen_all_109_before.jpg",
                "after": "assets/medium/spleen_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/medium/spleen_all_110_before.jpg",
                "after": "assets/medium/spleen_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/medium/spleen_all_111_before.jpg",
                "after": "assets/medium/spleen_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/medium/spleen_all_112_before.jpg",
                "after": "assets/medium/spleen_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/medium/spleen_all_113_before.jpg",
                "after": "assets/medium/spleen_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/medium/spleen_all_114_before.jpg",
                "after": "assets/medium/spleen_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/medium/spleen_all_115_before.jpg",
                "after": "assets/medium/spleen_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/medium/spleen_all_116_before.jpg",
                "after": "assets/medium/spleen_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/medium/spleen_all_117_before.jpg",
                "after": "assets/medium/spleen_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/medium/spleen_all_118_before.jpg",
                "after": "assets/medium/spleen_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/medium/spleen_all_119_before.jpg",
                "after": "assets/medium/spleen_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/medium/spleen_all_120_before.jpg",
                "after": "assets/medium/spleen_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/medium/spleen_all_121_before.jpg",
                "after": "assets/medium/spleen_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/medium/spleen_all_122_before.jpg",
                "after": "assets/medium/spleen_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/medium/spleen_all_123_before.jpg",
                "after": "assets/medium/spleen_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/medium/spleen_all_124_before.jpg",
                "after": "assets/medium/spleen_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/medium/spleen_all_125_before.jpg",
                "after": "assets/medium/spleen_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/medium/spleen_all_126_before.jpg",
                "after": "assets/medium/spleen_all_126_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/medium/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4104,
            "centroid": 0.8348
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3369,
            "centroid": 0.386
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260227_t1",
        "day": "20260227",
        "take": 1,
        "series": "20260227_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260227_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260227_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.901→0.916; Spleen 0.950→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026022701,
        "summary": "20260227_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90146,
            "after": 0.91567
          },
          "spleen": {
            "before": 0.94975,
            "after": 0.95986
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260227_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260227_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260227_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260227_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260227_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260227_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260227_t1/aorta_coronal_before.jpg",
                "after": "assets/20260227_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260227_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260227_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260227_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260227_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260227_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260227_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260227_t1/spleen_coronal_before.jpg",
                "after": "assets/20260227_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260227_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4482,
            "centroid": 0.1543
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3906,
            "centroid": 0.4401
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260312_t1",
        "day": "20260312",
        "take": 1,
        "series": "20260312_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260312_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260312_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.908→0.928; Spleen 0.900→0.955.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026031201,
        "summary": "20260312_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90826,
            "after": 0.92755
          },
          "spleen": {
            "before": 0.90036,
            "after": 0.95494
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260312_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260312_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260312_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260312_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260312_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260312_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260312_t1/aorta_coronal_before.jpg",
                "after": "assets/20260312_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260312_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260312_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260312_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260312_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260312_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260312_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260312_t1/spleen_coronal_before.jpg",
                "after": "assets/20260312_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260312_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3908,
            "centroid": 1.1805
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.4441,
            "centroid": 0.6766
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260312_t2",
        "day": "20260312",
        "take": 2,
        "series": "20260312_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260312_S3_Br40f_120_100_300_1_PolyE_take2_recon1mm",
        "title": "20260312_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.934→0.929; Spleen 0.906→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026031202,
        "summary": "20260312_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93385,
            "after": 0.92947
          },
          "spleen": {
            "before": 0.90606,
            "after": 0.96025
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260312_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260312_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260312_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260312_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260312_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260312_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260312_t2/aorta_coronal_before.jpg",
                "after": "assets/20260312_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260312_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260312_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260312_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260312_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260312_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260312_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260312_t2/spleen_coronal_before.jpg",
                "after": "assets/20260312_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260312_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.381,
            "centroid": 0.907
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3958,
            "centroid": 0.5293
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "good",
        "day": "20260327",
        "take": 1,
        "series": "20260327_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260327_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "Yüksek final",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Final 0.932",
        "note": "Final Dice yüksek; önce/sonra farkı orta düzeyde ve rigid katkısı net.",
        "featured": true,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026032701,
        "summary": "20260327_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.87798,
            "after": 0.93224
          },
          "spleen": {
            "before": 0.9208,
            "after": 0.96212
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/good/aorta_axial_0_before.jpg",
                "after": "assets/good/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/good/aorta_axial_1_before.jpg",
                "after": "assets/good/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/good/aorta_axial_2_before.jpg",
                "after": "assets/good/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/good/aorta_coronal_before.jpg",
                "after": "assets/good/aorta_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 27",
                "before": "assets/good/aorta_all_27_before.jpg",
                "after": "assets/good/aorta_all_27_after.jpg"
              },
              {
                "label": "z 28",
                "before": "assets/good/aorta_all_28_before.jpg",
                "after": "assets/good/aorta_all_28_after.jpg"
              },
              {
                "label": "z 29",
                "before": "assets/good/aorta_all_29_before.jpg",
                "after": "assets/good/aorta_all_29_after.jpg"
              },
              {
                "label": "z 30",
                "before": "assets/good/aorta_all_30_before.jpg",
                "after": "assets/good/aorta_all_30_after.jpg"
              },
              {
                "label": "z 31",
                "before": "assets/good/aorta_all_31_before.jpg",
                "after": "assets/good/aorta_all_31_after.jpg"
              },
              {
                "label": "z 32",
                "before": "assets/good/aorta_all_32_before.jpg",
                "after": "assets/good/aorta_all_32_after.jpg"
              },
              {
                "label": "z 33",
                "before": "assets/good/aorta_all_33_before.jpg",
                "after": "assets/good/aorta_all_33_after.jpg"
              },
              {
                "label": "z 34",
                "before": "assets/good/aorta_all_34_before.jpg",
                "after": "assets/good/aorta_all_34_after.jpg"
              },
              {
                "label": "z 35",
                "before": "assets/good/aorta_all_35_before.jpg",
                "after": "assets/good/aorta_all_35_after.jpg"
              },
              {
                "label": "z 36",
                "before": "assets/good/aorta_all_36_before.jpg",
                "after": "assets/good/aorta_all_36_after.jpg"
              },
              {
                "label": "z 37",
                "before": "assets/good/aorta_all_37_before.jpg",
                "after": "assets/good/aorta_all_37_after.jpg"
              },
              {
                "label": "z 38",
                "before": "assets/good/aorta_all_38_before.jpg",
                "after": "assets/good/aorta_all_38_after.jpg"
              },
              {
                "label": "z 39",
                "before": "assets/good/aorta_all_39_before.jpg",
                "after": "assets/good/aorta_all_39_after.jpg"
              },
              {
                "label": "z 40",
                "before": "assets/good/aorta_all_40_before.jpg",
                "after": "assets/good/aorta_all_40_after.jpg"
              },
              {
                "label": "z 41",
                "before": "assets/good/aorta_all_41_before.jpg",
                "after": "assets/good/aorta_all_41_after.jpg"
              },
              {
                "label": "z 42",
                "before": "assets/good/aorta_all_42_before.jpg",
                "after": "assets/good/aorta_all_42_after.jpg"
              },
              {
                "label": "z 43",
                "before": "assets/good/aorta_all_43_before.jpg",
                "after": "assets/good/aorta_all_43_after.jpg"
              },
              {
                "label": "z 44",
                "before": "assets/good/aorta_all_44_before.jpg",
                "after": "assets/good/aorta_all_44_after.jpg"
              },
              {
                "label": "z 45",
                "before": "assets/good/aorta_all_45_before.jpg",
                "after": "assets/good/aorta_all_45_after.jpg"
              },
              {
                "label": "z 46",
                "before": "assets/good/aorta_all_46_before.jpg",
                "after": "assets/good/aorta_all_46_after.jpg"
              },
              {
                "label": "z 47",
                "before": "assets/good/aorta_all_47_before.jpg",
                "after": "assets/good/aorta_all_47_after.jpg"
              },
              {
                "label": "z 48",
                "before": "assets/good/aorta_all_48_before.jpg",
                "after": "assets/good/aorta_all_48_after.jpg"
              },
              {
                "label": "z 49",
                "before": "assets/good/aorta_all_49_before.jpg",
                "after": "assets/good/aorta_all_49_after.jpg"
              },
              {
                "label": "z 50",
                "before": "assets/good/aorta_all_50_before.jpg",
                "after": "assets/good/aorta_all_50_after.jpg"
              },
              {
                "label": "z 51",
                "before": "assets/good/aorta_all_51_before.jpg",
                "after": "assets/good/aorta_all_51_after.jpg"
              },
              {
                "label": "z 52",
                "before": "assets/good/aorta_all_52_before.jpg",
                "after": "assets/good/aorta_all_52_after.jpg"
              },
              {
                "label": "z 53",
                "before": "assets/good/aorta_all_53_before.jpg",
                "after": "assets/good/aorta_all_53_after.jpg"
              },
              {
                "label": "z 54",
                "before": "assets/good/aorta_all_54_before.jpg",
                "after": "assets/good/aorta_all_54_after.jpg"
              },
              {
                "label": "z 55",
                "before": "assets/good/aorta_all_55_before.jpg",
                "after": "assets/good/aorta_all_55_after.jpg"
              },
              {
                "label": "z 56",
                "before": "assets/good/aorta_all_56_before.jpg",
                "after": "assets/good/aorta_all_56_after.jpg"
              },
              {
                "label": "z 57",
                "before": "assets/good/aorta_all_57_before.jpg",
                "after": "assets/good/aorta_all_57_after.jpg"
              },
              {
                "label": "z 58",
                "before": "assets/good/aorta_all_58_before.jpg",
                "after": "assets/good/aorta_all_58_after.jpg"
              },
              {
                "label": "z 59",
                "before": "assets/good/aorta_all_59_before.jpg",
                "after": "assets/good/aorta_all_59_after.jpg"
              },
              {
                "label": "z 60",
                "before": "assets/good/aorta_all_60_before.jpg",
                "after": "assets/good/aorta_all_60_after.jpg"
              },
              {
                "label": "z 61",
                "before": "assets/good/aorta_all_61_before.jpg",
                "after": "assets/good/aorta_all_61_after.jpg"
              },
              {
                "label": "z 62",
                "before": "assets/good/aorta_all_62_before.jpg",
                "after": "assets/good/aorta_all_62_after.jpg"
              },
              {
                "label": "z 63",
                "before": "assets/good/aorta_all_63_before.jpg",
                "after": "assets/good/aorta_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/good/aorta_all_64_before.jpg",
                "after": "assets/good/aorta_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/good/aorta_all_65_before.jpg",
                "after": "assets/good/aorta_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/good/aorta_all_66_before.jpg",
                "after": "assets/good/aorta_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/good/aorta_all_67_before.jpg",
                "after": "assets/good/aorta_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/good/aorta_all_68_before.jpg",
                "after": "assets/good/aorta_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/good/aorta_all_69_before.jpg",
                "after": "assets/good/aorta_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/good/aorta_all_70_before.jpg",
                "after": "assets/good/aorta_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/good/aorta_all_71_before.jpg",
                "after": "assets/good/aorta_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/good/aorta_all_72_before.jpg",
                "after": "assets/good/aorta_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/good/aorta_all_73_before.jpg",
                "after": "assets/good/aorta_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/good/aorta_all_74_before.jpg",
                "after": "assets/good/aorta_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/good/aorta_all_75_before.jpg",
                "after": "assets/good/aorta_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/good/aorta_all_76_before.jpg",
                "after": "assets/good/aorta_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/good/aorta_all_77_before.jpg",
                "after": "assets/good/aorta_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/good/aorta_all_78_before.jpg",
                "after": "assets/good/aorta_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/good/aorta_all_79_before.jpg",
                "after": "assets/good/aorta_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/good/aorta_all_80_before.jpg",
                "after": "assets/good/aorta_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/good/aorta_all_81_before.jpg",
                "after": "assets/good/aorta_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/good/aorta_all_82_before.jpg",
                "after": "assets/good/aorta_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/good/aorta_all_83_before.jpg",
                "after": "assets/good/aorta_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/good/aorta_all_84_before.jpg",
                "after": "assets/good/aorta_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/good/aorta_all_85_before.jpg",
                "after": "assets/good/aorta_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/good/aorta_all_86_before.jpg",
                "after": "assets/good/aorta_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/good/aorta_all_87_before.jpg",
                "after": "assets/good/aorta_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/good/aorta_all_88_before.jpg",
                "after": "assets/good/aorta_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/good/aorta_all_89_before.jpg",
                "after": "assets/good/aorta_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/good/aorta_all_90_before.jpg",
                "after": "assets/good/aorta_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/good/aorta_all_91_before.jpg",
                "after": "assets/good/aorta_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/good/aorta_all_92_before.jpg",
                "after": "assets/good/aorta_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/good/aorta_all_93_before.jpg",
                "after": "assets/good/aorta_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/good/aorta_all_94_before.jpg",
                "after": "assets/good/aorta_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/good/aorta_all_95_before.jpg",
                "after": "assets/good/aorta_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/good/aorta_all_96_before.jpg",
                "after": "assets/good/aorta_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/good/aorta_all_97_before.jpg",
                "after": "assets/good/aorta_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/good/aorta_all_98_before.jpg",
                "after": "assets/good/aorta_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/good/aorta_all_99_before.jpg",
                "after": "assets/good/aorta_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/good/aorta_all_100_before.jpg",
                "after": "assets/good/aorta_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/good/aorta_all_101_before.jpg",
                "after": "assets/good/aorta_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/good/aorta_all_102_before.jpg",
                "after": "assets/good/aorta_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/good/aorta_all_103_before.jpg",
                "after": "assets/good/aorta_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/good/aorta_all_104_before.jpg",
                "after": "assets/good/aorta_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/good/aorta_all_105_before.jpg",
                "after": "assets/good/aorta_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/good/aorta_all_106_before.jpg",
                "after": "assets/good/aorta_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/good/aorta_all_107_before.jpg",
                "after": "assets/good/aorta_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/good/aorta_all_108_before.jpg",
                "after": "assets/good/aorta_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/good/aorta_all_109_before.jpg",
                "after": "assets/good/aorta_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/good/aorta_all_110_before.jpg",
                "after": "assets/good/aorta_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/good/aorta_all_111_before.jpg",
                "after": "assets/good/aorta_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/good/aorta_all_112_before.jpg",
                "after": "assets/good/aorta_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/good/aorta_all_113_before.jpg",
                "after": "assets/good/aorta_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/good/aorta_all_114_before.jpg",
                "after": "assets/good/aorta_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/good/aorta_all_115_before.jpg",
                "after": "assets/good/aorta_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/good/aorta_all_116_before.jpg",
                "after": "assets/good/aorta_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/good/aorta_all_117_before.jpg",
                "after": "assets/good/aorta_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/good/aorta_all_118_before.jpg",
                "after": "assets/good/aorta_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/good/aorta_all_119_before.jpg",
                "after": "assets/good/aorta_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/good/aorta_all_120_before.jpg",
                "after": "assets/good/aorta_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/good/aorta_all_121_before.jpg",
                "after": "assets/good/aorta_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/good/aorta_all_122_before.jpg",
                "after": "assets/good/aorta_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/good/aorta_all_123_before.jpg",
                "after": "assets/good/aorta_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/good/aorta_all_124_before.jpg",
                "after": "assets/good/aorta_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/good/aorta_all_125_before.jpg",
                "after": "assets/good/aorta_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/good/aorta_all_126_before.jpg",
                "after": "assets/good/aorta_all_126_after.jpg"
              },
              {
                "label": "z 127",
                "before": "assets/good/aorta_all_127_before.jpg",
                "after": "assets/good/aorta_all_127_after.jpg"
              },
              {
                "label": "z 128",
                "before": "assets/good/aorta_all_128_before.jpg",
                "after": "assets/good/aorta_all_128_after.jpg"
              },
              {
                "label": "z 129",
                "before": "assets/good/aorta_all_129_before.jpg",
                "after": "assets/good/aorta_all_129_after.jpg"
              },
              {
                "label": "z 130",
                "before": "assets/good/aorta_all_130_before.jpg",
                "after": "assets/good/aorta_all_130_after.jpg"
              },
              {
                "label": "z 131",
                "before": "assets/good/aorta_all_131_before.jpg",
                "after": "assets/good/aorta_all_131_after.jpg"
              },
              {
                "label": "z 132",
                "before": "assets/good/aorta_all_132_before.jpg",
                "after": "assets/good/aorta_all_132_after.jpg"
              },
              {
                "label": "z 133",
                "before": "assets/good/aorta_all_133_before.jpg",
                "after": "assets/good/aorta_all_133_after.jpg"
              },
              {
                "label": "z 134",
                "before": "assets/good/aorta_all_134_before.jpg",
                "after": "assets/good/aorta_all_134_after.jpg"
              },
              {
                "label": "z 135",
                "before": "assets/good/aorta_all_135_before.jpg",
                "after": "assets/good/aorta_all_135_after.jpg"
              },
              {
                "label": "z 136",
                "before": "assets/good/aorta_all_136_before.jpg",
                "after": "assets/good/aorta_all_136_after.jpg"
              },
              {
                "label": "z 137",
                "before": "assets/good/aorta_all_137_before.jpg",
                "after": "assets/good/aorta_all_137_after.jpg"
              },
              {
                "label": "z 138",
                "before": "assets/good/aorta_all_138_before.jpg",
                "after": "assets/good/aorta_all_138_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/good/spleen_axial_0_before.jpg",
                "after": "assets/good/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/good/spleen_axial_1_before.jpg",
                "after": "assets/good/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/good/spleen_axial_2_before.jpg",
                "after": "assets/good/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/good/spleen_coronal_before.jpg",
                "after": "assets/good/spleen_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 63",
                "before": "assets/good/spleen_all_63_before.jpg",
                "after": "assets/good/spleen_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/good/spleen_all_64_before.jpg",
                "after": "assets/good/spleen_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/good/spleen_all_65_before.jpg",
                "after": "assets/good/spleen_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/good/spleen_all_66_before.jpg",
                "after": "assets/good/spleen_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/good/spleen_all_67_before.jpg",
                "after": "assets/good/spleen_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/good/spleen_all_68_before.jpg",
                "after": "assets/good/spleen_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/good/spleen_all_69_before.jpg",
                "after": "assets/good/spleen_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/good/spleen_all_70_before.jpg",
                "after": "assets/good/spleen_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/good/spleen_all_71_before.jpg",
                "after": "assets/good/spleen_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/good/spleen_all_72_before.jpg",
                "after": "assets/good/spleen_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/good/spleen_all_73_before.jpg",
                "after": "assets/good/spleen_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/good/spleen_all_74_before.jpg",
                "after": "assets/good/spleen_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/good/spleen_all_75_before.jpg",
                "after": "assets/good/spleen_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/good/spleen_all_76_before.jpg",
                "after": "assets/good/spleen_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/good/spleen_all_77_before.jpg",
                "after": "assets/good/spleen_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/good/spleen_all_78_before.jpg",
                "after": "assets/good/spleen_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/good/spleen_all_79_before.jpg",
                "after": "assets/good/spleen_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/good/spleen_all_80_before.jpg",
                "after": "assets/good/spleen_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/good/spleen_all_81_before.jpg",
                "after": "assets/good/spleen_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/good/spleen_all_82_before.jpg",
                "after": "assets/good/spleen_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/good/spleen_all_83_before.jpg",
                "after": "assets/good/spleen_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/good/spleen_all_84_before.jpg",
                "after": "assets/good/spleen_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/good/spleen_all_85_before.jpg",
                "after": "assets/good/spleen_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/good/spleen_all_86_before.jpg",
                "after": "assets/good/spleen_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/good/spleen_all_87_before.jpg",
                "after": "assets/good/spleen_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/good/spleen_all_88_before.jpg",
                "after": "assets/good/spleen_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/good/spleen_all_89_before.jpg",
                "after": "assets/good/spleen_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/good/spleen_all_90_before.jpg",
                "after": "assets/good/spleen_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/good/spleen_all_91_before.jpg",
                "after": "assets/good/spleen_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/good/spleen_all_92_before.jpg",
                "after": "assets/good/spleen_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/good/spleen_all_93_before.jpg",
                "after": "assets/good/spleen_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/good/spleen_all_94_before.jpg",
                "after": "assets/good/spleen_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/good/spleen_all_95_before.jpg",
                "after": "assets/good/spleen_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/good/spleen_all_96_before.jpg",
                "after": "assets/good/spleen_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/good/spleen_all_97_before.jpg",
                "after": "assets/good/spleen_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/good/spleen_all_98_before.jpg",
                "after": "assets/good/spleen_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/good/spleen_all_99_before.jpg",
                "after": "assets/good/spleen_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/good/spleen_all_100_before.jpg",
                "after": "assets/good/spleen_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/good/spleen_all_101_before.jpg",
                "after": "assets/good/spleen_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/good/spleen_all_102_before.jpg",
                "after": "assets/good/spleen_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/good/spleen_all_103_before.jpg",
                "after": "assets/good/spleen_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/good/spleen_all_104_before.jpg",
                "after": "assets/good/spleen_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/good/spleen_all_105_before.jpg",
                "after": "assets/good/spleen_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/good/spleen_all_106_before.jpg",
                "after": "assets/good/spleen_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/good/spleen_all_107_before.jpg",
                "after": "assets/good/spleen_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/good/spleen_all_108_before.jpg",
                "after": "assets/good/spleen_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/good/spleen_all_109_before.jpg",
                "after": "assets/good/spleen_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/good/spleen_all_110_before.jpg",
                "after": "assets/good/spleen_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/good/spleen_all_111_before.jpg",
                "after": "assets/good/spleen_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/good/spleen_all_112_before.jpg",
                "after": "assets/good/spleen_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/good/spleen_all_113_before.jpg",
                "after": "assets/good/spleen_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/good/spleen_all_114_before.jpg",
                "after": "assets/good/spleen_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/good/spleen_all_115_before.jpg",
                "after": "assets/good/spleen_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/good/spleen_all_116_before.jpg",
                "after": "assets/good/spleen_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/good/spleen_all_117_before.jpg",
                "after": "assets/good/spleen_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/good/spleen_all_118_before.jpg",
                "after": "assets/good/spleen_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/good/spleen_all_119_before.jpg",
                "after": "assets/good/spleen_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/good/spleen_all_120_before.jpg",
                "after": "assets/good/spleen_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/good/spleen_all_121_before.jpg",
                "after": "assets/good/spleen_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/good/spleen_all_122_before.jpg",
                "after": "assets/good/spleen_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/good/spleen_all_123_before.jpg",
                "after": "assets/good/spleen_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/good/spleen_all_124_before.jpg",
                "after": "assets/good/spleen_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/good/spleen_all_125_before.jpg",
                "after": "assets/good/spleen_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/good/spleen_all_126_before.jpg",
                "after": "assets/good/spleen_all_126_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/good/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3615,
            "centroid": 0.6045
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3523,
            "centroid": 0.4082
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260430_t1",
        "day": "20260430",
        "take": 1,
        "series": "20260430_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260429_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260430_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.872→0.934; Spleen 0.889→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026043001,
        "summary": "20260430_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.87202,
            "after": 0.93427
          },
          "spleen": {
            "before": 0.88912,
            "after": 0.9591
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260430_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260430_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260430_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260430_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260430_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260430_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260430_t1/aorta_coronal_before.jpg",
                "after": "assets/20260430_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260430_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260430_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260430_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260430_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260430_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260430_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260430_t1/spleen_coronal_before.jpg",
                "after": "assets/20260430_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260430_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3583,
            "centroid": 0.8709
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.3963,
            "centroid": 0.7618
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260505_t1",
        "day": "20260505",
        "take": 1,
        "series": "20260505_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260505_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260505_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.917→0.921; Spleen 0.963→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026050501,
        "summary": "20260505_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91724,
            "after": 0.92072
          },
          "spleen": {
            "before": 0.96263,
            "after": 0.95892
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260505_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260505_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260505_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260505_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260505_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260505_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260505_t1/aorta_coronal_before.jpg",
                "after": "assets/20260505_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260505_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260505_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260505_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260505_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260505_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260505_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260505_t1/spleen_coronal_before.jpg",
                "after": "assets/20260505_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260505_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4247,
            "centroid": 0.1516
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4029,
            "centroid": 0.3493
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260512_t1",
        "day": "20260512",
        "take": 1,
        "series": "20260512_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260512_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260512_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.887→0.925; Spleen 0.894→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026051201,
        "summary": "20260512_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88717,
            "after": 0.92545
          },
          "spleen": {
            "before": 0.89359,
            "after": 0.9648
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260512_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260512_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260512_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260512_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260512_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260512_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260512_t1/aorta_coronal_before.jpg",
                "after": "assets/20260512_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260512_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260512_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260512_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260512_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260512_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260512_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260512_t1/spleen_coronal_before.jpg",
                "after": "assets/20260512_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260512_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3961,
            "centroid": 0.0408
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.342,
            "centroid": 0.3586
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260526_t1",
        "day": "20260526",
        "take": 1,
        "series": "20260526_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260526_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260526_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.908→0.930; Spleen 0.936→0.953.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052601,
        "summary": "20260526_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90836,
            "after": 0.92957
          },
          "spleen": {
            "before": 0.9361,
            "after": 0.95298
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260526_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260526_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260526_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260526_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260526_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260526_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260526_t1/aorta_coronal_before.jpg",
                "after": "assets/20260526_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260526_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260526_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260526_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260526_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260526_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260526_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260526_t1/spleen_coronal_before.jpg",
                "after": "assets/20260526_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260526_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3816,
            "centroid": 0.3626
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.4711,
            "centroid": 1.0317
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260526_t2",
        "day": "20260526",
        "take": 2,
        "series": "20260526_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260526_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s4",
        "title": "20260526_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.909→0.939; Spleen 0.936→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052602,
        "summary": "20260526_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9093,
            "after": 0.9393
          },
          "spleen": {
            "before": 0.93581,
            "after": 0.96527
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260526_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260526_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260526_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260526_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260526_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260526_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260526_t2/aorta_coronal_before.jpg",
                "after": "assets/20260526_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260526_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260526_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260526_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260526_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260526_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260526_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260526_t2/spleen_coronal_before.jpg",
                "after": "assets/20260526_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260526_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3316,
            "centroid": 0.1871
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3398,
            "centroid": 0.3408
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260601_t1",
        "day": "20260601",
        "take": 1,
        "series": "20260601_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260601_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260601_t1",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.870→0.937; Spleen 0.821→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026060101,
        "summary": "20260601_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.86954,
            "after": 0.93658
          },
          "spleen": {
            "before": 0.82134,
            "after": 0.96197
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260601_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260601_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260601_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260601_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260601_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260601_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260601_t1/aorta_coronal_before.jpg",
                "after": "assets/20260601_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260601_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260601_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260601_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260601_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260601_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260601_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260601_t1/spleen_coronal_before.jpg",
                "after": "assets/20260601_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260601_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3319,
            "centroid": 0.1808
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.3552,
            "centroid": 0.72
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260611_t1",
        "day": "20260611",
        "take": 1,
        "series": "20260611_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260611_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260611_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.904→0.943; Spleen 0.924→0.958.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061101,
        "summary": "20260611_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90416,
            "after": 0.94327
          },
          "spleen": {
            "before": 0.92424,
            "after": 0.95812
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260611_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260611_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260611_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260611_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260611_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260611_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260611_t1/aorta_coronal_before.jpg",
                "after": "assets/20260611_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260611_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260611_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260611_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260611_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260611_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260611_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260611_t1/spleen_coronal_before.jpg",
                "after": "assets/20260611_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260611_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2969,
            "centroid": 0.2686
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4188,
            "centroid": 0.5211
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260617_t1",
        "day": "20260617",
        "take": 1,
        "series": "20260617_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260617_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260617_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.863→0.924; Spleen 0.869→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061701,
        "summary": "20260617_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.86318,
            "after": 0.92429
          },
          "spleen": {
            "before": 0.86933,
            "after": 0.96016
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260617_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260617_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260617_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260617_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260617_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260617_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260617_t1/aorta_coronal_before.jpg",
                "after": "assets/20260617_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260617_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260617_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260617_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260617_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260617_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260617_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260617_t1/spleen_coronal_before.jpg",
                "after": "assets/20260617_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260617_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3997,
            "centroid": 0.1659
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.3798,
            "centroid": 0.647
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260622_t1",
        "day": "20260622",
        "take": 1,
        "series": "20260622_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260622_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260622_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.891→0.920; Spleen 0.850→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062201,
        "summary": "20260622_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89122,
            "after": 0.91983
          },
          "spleen": {
            "before": 0.85009,
            "after": 0.96742
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260622_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260622_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260622_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260622_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260622_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260622_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260622_t1/aorta_coronal_before.jpg",
                "after": "assets/20260622_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260622_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260622_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260622_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260622_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260622_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260622_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260622_t1/spleen_coronal_before.jpg",
                "after": "assets/20260622_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260622_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4244,
            "centroid": 0.1567
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.301,
            "centroid": 0.246
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260622_t2",
        "day": "20260622",
        "take": 2,
        "series": "20260622_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260622_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s1005",
        "title": "20260622_t2",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.874→0.922; Spleen 0.836→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062202,
        "summary": "20260622_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.87442,
            "after": 0.92178
          },
          "spleen": {
            "before": 0.83639,
            "after": 0.95986
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260622_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260622_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260622_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260622_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260622_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260622_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260622_t2/aorta_coronal_before.jpg",
                "after": "assets/20260622_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260622_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260622_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260622_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260622_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260622_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260622_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260622_t2/spleen_coronal_before.jpg",
                "after": "assets/20260622_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260622_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4126,
            "centroid": 0.3839
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3989,
            "centroid": 0.599
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260622_t3",
        "day": "20260622",
        "take": 3,
        "series": "20260622_t3",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260622_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s2087",
        "title": "20260622_t3",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "Workbook dışı",
        "note": "Workbook dışı bırakılan take; kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": false,
        "order": 2026062203,
        "summary": "20260622_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.8749,
            "after": 0.91865
          },
          "spleen": {
            "before": 0.83771,
            "after": 0.96065
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260622_t3/aorta_axial_0_before.jpg",
                "after": "assets/20260622_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260622_t3/aorta_axial_1_before.jpg",
                "after": "assets/20260622_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260622_t3/aorta_axial_2_before.jpg",
                "after": "assets/20260622_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260622_t3/aorta_coronal_before.jpg",
                "after": "assets/20260622_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260622_t3/spleen_axial_0_before.jpg",
                "after": "assets/20260622_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260622_t3/spleen_axial_1_before.jpg",
                "after": "assets/20260622_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260622_t3/spleen_axial_2_before.jpg",
                "after": "assets/20260622_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260622_t3/spleen_coronal_before.jpg",
                "after": "assets/20260622_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260622_t3/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4345,
            "centroid": 0.584
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.387,
            "centroid": 0.6652
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260629_t1",
        "day": "20260629",
        "take": 1,
        "series": "20260629_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260629_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260629_t1",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.803→0.928; Spleen 0.784→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062901,
        "summary": "20260629_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.80267,
            "after": 0.92824
          },
          "spleen": {
            "before": 0.78429,
            "after": 0.96425
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260629_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260629_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260629_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260629_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260629_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260629_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260629_t1/aorta_coronal_before.jpg",
                "after": "assets/20260629_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260629_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260629_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260629_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260629_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260629_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260629_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260629_t1/spleen_coronal_before.jpg",
                "after": "assets/20260629_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260629_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3778,
            "centroid": 0.0977
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3457,
            "centroid": 0.4329
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260707_t1",
        "day": "20260707",
        "take": 1,
        "series": "20260707_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260707_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260707_t1",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.856→0.931; Spleen 0.786→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026070701,
        "summary": "20260707_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.85554,
            "after": 0.93067
          },
          "spleen": {
            "before": 0.78646,
            "after": 0.96308
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260707_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260707_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260707_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260707_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260707_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260707_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260707_t1/aorta_coronal_before.jpg",
                "after": "assets/20260707_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260707_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260707_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260707_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260707_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260707_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260707_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260707_t1/spleen_coronal_before.jpg",
                "after": "assets/20260707_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260707_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.371,
            "centroid": 0.3435
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3516,
            "centroid": 0.3065
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260714_t1",
        "day": "20260714",
        "take": 1,
        "series": "20260714_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260714_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260714_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.894→0.927; Spleen 0.899→0.969.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026071401,
        "summary": "20260714_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89437,
            "after": 0.92744
          },
          "spleen": {
            "before": 0.8992,
            "after": 0.96884
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260714_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260714_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260714_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260714_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260714_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260714_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260714_t1/aorta_coronal_before.jpg",
                "after": "assets/20260714_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260714_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260714_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260714_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260714_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260714_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260714_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260714_t1/spleen_coronal_before.jpg",
                "after": "assets/20260714_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260714_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3879,
            "centroid": 0.6044
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2812,
            "centroid": 0.3053
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260721_t1",
        "day": "20260721",
        "take": 1,
        "series": "20260721_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260721_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260721_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.918→0.933; Spleen 0.941→0.957.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026072101,
        "summary": "20260721_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91762,
            "after": 0.93276
          },
          "spleen": {
            "before": 0.94148,
            "after": 0.95722
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260721_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260721_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260721_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260721_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260721_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260721_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260721_t1/aorta_coronal_before.jpg",
                "after": "assets/20260721_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260721_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260721_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260721_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260721_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260721_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260721_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260721_t1/spleen_coronal_before.jpg",
                "after": "assets/20260721_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260721_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3507,
            "centroid": 0.4231
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.4195,
            "centroid": 0.5755
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "high",
        "day": "20260730",
        "take": 1,
        "series": "20260730_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260730_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "Çok iyi iyileşen",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "En yüksek kazanç",
        "note": "Aorta +0.072, Spleen +0.149. Belirgin rigid düzeltmesi; sonuç iki organda da yüksek.",
        "featured": true,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073001,
        "summary": "20260730_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.85451,
            "after": 0.9264
          },
          "spleen": {
            "before": 0.81716,
            "after": 0.96567
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/high/aorta_axial_0_before.jpg",
                "after": "assets/high/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/high/aorta_axial_1_before.jpg",
                "after": "assets/high/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/high/aorta_axial_2_before.jpg",
                "after": "assets/high/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/high/aorta_coronal_before.jpg",
                "after": "assets/high/aorta_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 27",
                "before": "assets/high/aorta_all_27_before.jpg",
                "after": "assets/high/aorta_all_27_after.jpg"
              },
              {
                "label": "z 28",
                "before": "assets/high/aorta_all_28_before.jpg",
                "after": "assets/high/aorta_all_28_after.jpg"
              },
              {
                "label": "z 29",
                "before": "assets/high/aorta_all_29_before.jpg",
                "after": "assets/high/aorta_all_29_after.jpg"
              },
              {
                "label": "z 30",
                "before": "assets/high/aorta_all_30_before.jpg",
                "after": "assets/high/aorta_all_30_after.jpg"
              },
              {
                "label": "z 31",
                "before": "assets/high/aorta_all_31_before.jpg",
                "after": "assets/high/aorta_all_31_after.jpg"
              },
              {
                "label": "z 32",
                "before": "assets/high/aorta_all_32_before.jpg",
                "after": "assets/high/aorta_all_32_after.jpg"
              },
              {
                "label": "z 33",
                "before": "assets/high/aorta_all_33_before.jpg",
                "after": "assets/high/aorta_all_33_after.jpg"
              },
              {
                "label": "z 34",
                "before": "assets/high/aorta_all_34_before.jpg",
                "after": "assets/high/aorta_all_34_after.jpg"
              },
              {
                "label": "z 35",
                "before": "assets/high/aorta_all_35_before.jpg",
                "after": "assets/high/aorta_all_35_after.jpg"
              },
              {
                "label": "z 36",
                "before": "assets/high/aorta_all_36_before.jpg",
                "after": "assets/high/aorta_all_36_after.jpg"
              },
              {
                "label": "z 37",
                "before": "assets/high/aorta_all_37_before.jpg",
                "after": "assets/high/aorta_all_37_after.jpg"
              },
              {
                "label": "z 38",
                "before": "assets/high/aorta_all_38_before.jpg",
                "after": "assets/high/aorta_all_38_after.jpg"
              },
              {
                "label": "z 39",
                "before": "assets/high/aorta_all_39_before.jpg",
                "after": "assets/high/aorta_all_39_after.jpg"
              },
              {
                "label": "z 40",
                "before": "assets/high/aorta_all_40_before.jpg",
                "after": "assets/high/aorta_all_40_after.jpg"
              },
              {
                "label": "z 41",
                "before": "assets/high/aorta_all_41_before.jpg",
                "after": "assets/high/aorta_all_41_after.jpg"
              },
              {
                "label": "z 42",
                "before": "assets/high/aorta_all_42_before.jpg",
                "after": "assets/high/aorta_all_42_after.jpg"
              },
              {
                "label": "z 43",
                "before": "assets/high/aorta_all_43_before.jpg",
                "after": "assets/high/aorta_all_43_after.jpg"
              },
              {
                "label": "z 44",
                "before": "assets/high/aorta_all_44_before.jpg",
                "after": "assets/high/aorta_all_44_after.jpg"
              },
              {
                "label": "z 45",
                "before": "assets/high/aorta_all_45_before.jpg",
                "after": "assets/high/aorta_all_45_after.jpg"
              },
              {
                "label": "z 46",
                "before": "assets/high/aorta_all_46_before.jpg",
                "after": "assets/high/aorta_all_46_after.jpg"
              },
              {
                "label": "z 47",
                "before": "assets/high/aorta_all_47_before.jpg",
                "after": "assets/high/aorta_all_47_after.jpg"
              },
              {
                "label": "z 48",
                "before": "assets/high/aorta_all_48_before.jpg",
                "after": "assets/high/aorta_all_48_after.jpg"
              },
              {
                "label": "z 49",
                "before": "assets/high/aorta_all_49_before.jpg",
                "after": "assets/high/aorta_all_49_after.jpg"
              },
              {
                "label": "z 50",
                "before": "assets/high/aorta_all_50_before.jpg",
                "after": "assets/high/aorta_all_50_after.jpg"
              },
              {
                "label": "z 51",
                "before": "assets/high/aorta_all_51_before.jpg",
                "after": "assets/high/aorta_all_51_after.jpg"
              },
              {
                "label": "z 52",
                "before": "assets/high/aorta_all_52_before.jpg",
                "after": "assets/high/aorta_all_52_after.jpg"
              },
              {
                "label": "z 53",
                "before": "assets/high/aorta_all_53_before.jpg",
                "after": "assets/high/aorta_all_53_after.jpg"
              },
              {
                "label": "z 54",
                "before": "assets/high/aorta_all_54_before.jpg",
                "after": "assets/high/aorta_all_54_after.jpg"
              },
              {
                "label": "z 55",
                "before": "assets/high/aorta_all_55_before.jpg",
                "after": "assets/high/aorta_all_55_after.jpg"
              },
              {
                "label": "z 56",
                "before": "assets/high/aorta_all_56_before.jpg",
                "after": "assets/high/aorta_all_56_after.jpg"
              },
              {
                "label": "z 57",
                "before": "assets/high/aorta_all_57_before.jpg",
                "after": "assets/high/aorta_all_57_after.jpg"
              },
              {
                "label": "z 58",
                "before": "assets/high/aorta_all_58_before.jpg",
                "after": "assets/high/aorta_all_58_after.jpg"
              },
              {
                "label": "z 59",
                "before": "assets/high/aorta_all_59_before.jpg",
                "after": "assets/high/aorta_all_59_after.jpg"
              },
              {
                "label": "z 60",
                "before": "assets/high/aorta_all_60_before.jpg",
                "after": "assets/high/aorta_all_60_after.jpg"
              },
              {
                "label": "z 61",
                "before": "assets/high/aorta_all_61_before.jpg",
                "after": "assets/high/aorta_all_61_after.jpg"
              },
              {
                "label": "z 62",
                "before": "assets/high/aorta_all_62_before.jpg",
                "after": "assets/high/aorta_all_62_after.jpg"
              },
              {
                "label": "z 63",
                "before": "assets/high/aorta_all_63_before.jpg",
                "after": "assets/high/aorta_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/high/aorta_all_64_before.jpg",
                "after": "assets/high/aorta_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/high/aorta_all_65_before.jpg",
                "after": "assets/high/aorta_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/high/aorta_all_66_before.jpg",
                "after": "assets/high/aorta_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/high/aorta_all_67_before.jpg",
                "after": "assets/high/aorta_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/high/aorta_all_68_before.jpg",
                "after": "assets/high/aorta_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/high/aorta_all_69_before.jpg",
                "after": "assets/high/aorta_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/high/aorta_all_70_before.jpg",
                "after": "assets/high/aorta_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/high/aorta_all_71_before.jpg",
                "after": "assets/high/aorta_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/high/aorta_all_72_before.jpg",
                "after": "assets/high/aorta_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/high/aorta_all_73_before.jpg",
                "after": "assets/high/aorta_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/high/aorta_all_74_before.jpg",
                "after": "assets/high/aorta_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/high/aorta_all_75_before.jpg",
                "after": "assets/high/aorta_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/high/aorta_all_76_before.jpg",
                "after": "assets/high/aorta_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/high/aorta_all_77_before.jpg",
                "after": "assets/high/aorta_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/high/aorta_all_78_before.jpg",
                "after": "assets/high/aorta_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/high/aorta_all_79_before.jpg",
                "after": "assets/high/aorta_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/high/aorta_all_80_before.jpg",
                "after": "assets/high/aorta_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/high/aorta_all_81_before.jpg",
                "after": "assets/high/aorta_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/high/aorta_all_82_before.jpg",
                "after": "assets/high/aorta_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/high/aorta_all_83_before.jpg",
                "after": "assets/high/aorta_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/high/aorta_all_84_before.jpg",
                "after": "assets/high/aorta_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/high/aorta_all_85_before.jpg",
                "after": "assets/high/aorta_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/high/aorta_all_86_before.jpg",
                "after": "assets/high/aorta_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/high/aorta_all_87_before.jpg",
                "after": "assets/high/aorta_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/high/aorta_all_88_before.jpg",
                "after": "assets/high/aorta_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/high/aorta_all_89_before.jpg",
                "after": "assets/high/aorta_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/high/aorta_all_90_before.jpg",
                "after": "assets/high/aorta_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/high/aorta_all_91_before.jpg",
                "after": "assets/high/aorta_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/high/aorta_all_92_before.jpg",
                "after": "assets/high/aorta_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/high/aorta_all_93_before.jpg",
                "after": "assets/high/aorta_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/high/aorta_all_94_before.jpg",
                "after": "assets/high/aorta_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/high/aorta_all_95_before.jpg",
                "after": "assets/high/aorta_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/high/aorta_all_96_before.jpg",
                "after": "assets/high/aorta_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/high/aorta_all_97_before.jpg",
                "after": "assets/high/aorta_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/high/aorta_all_98_before.jpg",
                "after": "assets/high/aorta_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/high/aorta_all_99_before.jpg",
                "after": "assets/high/aorta_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/high/aorta_all_100_before.jpg",
                "after": "assets/high/aorta_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/high/aorta_all_101_before.jpg",
                "after": "assets/high/aorta_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/high/aorta_all_102_before.jpg",
                "after": "assets/high/aorta_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/high/aorta_all_103_before.jpg",
                "after": "assets/high/aorta_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/high/aorta_all_104_before.jpg",
                "after": "assets/high/aorta_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/high/aorta_all_105_before.jpg",
                "after": "assets/high/aorta_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/high/aorta_all_106_before.jpg",
                "after": "assets/high/aorta_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/high/aorta_all_107_before.jpg",
                "after": "assets/high/aorta_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/high/aorta_all_108_before.jpg",
                "after": "assets/high/aorta_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/high/aorta_all_109_before.jpg",
                "after": "assets/high/aorta_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/high/aorta_all_110_before.jpg",
                "after": "assets/high/aorta_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/high/aorta_all_111_before.jpg",
                "after": "assets/high/aorta_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/high/aorta_all_112_before.jpg",
                "after": "assets/high/aorta_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/high/aorta_all_113_before.jpg",
                "after": "assets/high/aorta_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/high/aorta_all_114_before.jpg",
                "after": "assets/high/aorta_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/high/aorta_all_115_before.jpg",
                "after": "assets/high/aorta_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/high/aorta_all_116_before.jpg",
                "after": "assets/high/aorta_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/high/aorta_all_117_before.jpg",
                "after": "assets/high/aorta_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/high/aorta_all_118_before.jpg",
                "after": "assets/high/aorta_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/high/aorta_all_119_before.jpg",
                "after": "assets/high/aorta_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/high/aorta_all_120_before.jpg",
                "after": "assets/high/aorta_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/high/aorta_all_121_before.jpg",
                "after": "assets/high/aorta_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/high/aorta_all_122_before.jpg",
                "after": "assets/high/aorta_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/high/aorta_all_123_before.jpg",
                "after": "assets/high/aorta_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/high/aorta_all_124_before.jpg",
                "after": "assets/high/aorta_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/high/aorta_all_125_before.jpg",
                "after": "assets/high/aorta_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/high/aorta_all_126_before.jpg",
                "after": "assets/high/aorta_all_126_after.jpg"
              },
              {
                "label": "z 127",
                "before": "assets/high/aorta_all_127_before.jpg",
                "after": "assets/high/aorta_all_127_after.jpg"
              },
              {
                "label": "z 128",
                "before": "assets/high/aorta_all_128_before.jpg",
                "after": "assets/high/aorta_all_128_after.jpg"
              },
              {
                "label": "z 129",
                "before": "assets/high/aorta_all_129_before.jpg",
                "after": "assets/high/aorta_all_129_after.jpg"
              },
              {
                "label": "z 130",
                "before": "assets/high/aorta_all_130_before.jpg",
                "after": "assets/high/aorta_all_130_after.jpg"
              },
              {
                "label": "z 131",
                "before": "assets/high/aorta_all_131_before.jpg",
                "after": "assets/high/aorta_all_131_after.jpg"
              },
              {
                "label": "z 132",
                "before": "assets/high/aorta_all_132_before.jpg",
                "after": "assets/high/aorta_all_132_after.jpg"
              },
              {
                "label": "z 133",
                "before": "assets/high/aorta_all_133_before.jpg",
                "after": "assets/high/aorta_all_133_after.jpg"
              },
              {
                "label": "z 134",
                "before": "assets/high/aorta_all_134_before.jpg",
                "after": "assets/high/aorta_all_134_after.jpg"
              },
              {
                "label": "z 135",
                "before": "assets/high/aorta_all_135_before.jpg",
                "after": "assets/high/aorta_all_135_after.jpg"
              },
              {
                "label": "z 136",
                "before": "assets/high/aorta_all_136_before.jpg",
                "after": "assets/high/aorta_all_136_after.jpg"
              },
              {
                "label": "z 137",
                "before": "assets/high/aorta_all_137_before.jpg",
                "after": "assets/high/aorta_all_137_after.jpg"
              },
              {
                "label": "z 138",
                "before": "assets/high/aorta_all_138_before.jpg",
                "after": "assets/high/aorta_all_138_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/high/spleen_axial_0_before.jpg",
                "after": "assets/high/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/high/spleen_axial_1_before.jpg",
                "after": "assets/high/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/high/spleen_axial_2_before.jpg",
                "after": "assets/high/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/high/spleen_coronal_before.jpg",
                "after": "assets/high/spleen_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 63",
                "before": "assets/high/spleen_all_63_before.jpg",
                "after": "assets/high/spleen_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/high/spleen_all_64_before.jpg",
                "after": "assets/high/spleen_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/high/spleen_all_65_before.jpg",
                "after": "assets/high/spleen_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/high/spleen_all_66_before.jpg",
                "after": "assets/high/spleen_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/high/spleen_all_67_before.jpg",
                "after": "assets/high/spleen_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/high/spleen_all_68_before.jpg",
                "after": "assets/high/spleen_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/high/spleen_all_69_before.jpg",
                "after": "assets/high/spleen_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/high/spleen_all_70_before.jpg",
                "after": "assets/high/spleen_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/high/spleen_all_71_before.jpg",
                "after": "assets/high/spleen_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/high/spleen_all_72_before.jpg",
                "after": "assets/high/spleen_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/high/spleen_all_73_before.jpg",
                "after": "assets/high/spleen_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/high/spleen_all_74_before.jpg",
                "after": "assets/high/spleen_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/high/spleen_all_75_before.jpg",
                "after": "assets/high/spleen_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/high/spleen_all_76_before.jpg",
                "after": "assets/high/spleen_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/high/spleen_all_77_before.jpg",
                "after": "assets/high/spleen_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/high/spleen_all_78_before.jpg",
                "after": "assets/high/spleen_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/high/spleen_all_79_before.jpg",
                "after": "assets/high/spleen_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/high/spleen_all_80_before.jpg",
                "after": "assets/high/spleen_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/high/spleen_all_81_before.jpg",
                "after": "assets/high/spleen_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/high/spleen_all_82_before.jpg",
                "after": "assets/high/spleen_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/high/spleen_all_83_before.jpg",
                "after": "assets/high/spleen_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/high/spleen_all_84_before.jpg",
                "after": "assets/high/spleen_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/high/spleen_all_85_before.jpg",
                "after": "assets/high/spleen_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/high/spleen_all_86_before.jpg",
                "after": "assets/high/spleen_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/high/spleen_all_87_before.jpg",
                "after": "assets/high/spleen_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/high/spleen_all_88_before.jpg",
                "after": "assets/high/spleen_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/high/spleen_all_89_before.jpg",
                "after": "assets/high/spleen_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/high/spleen_all_90_before.jpg",
                "after": "assets/high/spleen_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/high/spleen_all_91_before.jpg",
                "after": "assets/high/spleen_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/high/spleen_all_92_before.jpg",
                "after": "assets/high/spleen_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/high/spleen_all_93_before.jpg",
                "after": "assets/high/spleen_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/high/spleen_all_94_before.jpg",
                "after": "assets/high/spleen_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/high/spleen_all_95_before.jpg",
                "after": "assets/high/spleen_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/high/spleen_all_96_before.jpg",
                "after": "assets/high/spleen_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/high/spleen_all_97_before.jpg",
                "after": "assets/high/spleen_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/high/spleen_all_98_before.jpg",
                "after": "assets/high/spleen_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/high/spleen_all_99_before.jpg",
                "after": "assets/high/spleen_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/high/spleen_all_100_before.jpg",
                "after": "assets/high/spleen_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/high/spleen_all_101_before.jpg",
                "after": "assets/high/spleen_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/high/spleen_all_102_before.jpg",
                "after": "assets/high/spleen_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/high/spleen_all_103_before.jpg",
                "after": "assets/high/spleen_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/high/spleen_all_104_before.jpg",
                "after": "assets/high/spleen_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/high/spleen_all_105_before.jpg",
                "after": "assets/high/spleen_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/high/spleen_all_106_before.jpg",
                "after": "assets/high/spleen_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/high/spleen_all_107_before.jpg",
                "after": "assets/high/spleen_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/high/spleen_all_108_before.jpg",
                "after": "assets/high/spleen_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/high/spleen_all_109_before.jpg",
                "after": "assets/high/spleen_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/high/spleen_all_110_before.jpg",
                "after": "assets/high/spleen_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/high/spleen_all_111_before.jpg",
                "after": "assets/high/spleen_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/high/spleen_all_112_before.jpg",
                "after": "assets/high/spleen_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/high/spleen_all_113_before.jpg",
                "after": "assets/high/spleen_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/high/spleen_all_114_before.jpg",
                "after": "assets/high/spleen_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/high/spleen_all_115_before.jpg",
                "after": "assets/high/spleen_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/high/spleen_all_116_before.jpg",
                "after": "assets/high/spleen_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/high/spleen_all_117_before.jpg",
                "after": "assets/high/spleen_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/high/spleen_all_118_before.jpg",
                "after": "assets/high/spleen_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/high/spleen_all_119_before.jpg",
                "after": "assets/high/spleen_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/high/spleen_all_120_before.jpg",
                "after": "assets/high/spleen_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/high/spleen_all_121_before.jpg",
                "after": "assets/high/spleen_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/high/spleen_all_122_before.jpg",
                "after": "assets/high/spleen_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/high/spleen_all_123_before.jpg",
                "after": "assets/high/spleen_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/high/spleen_all_124_before.jpg",
                "after": "assets/high/spleen_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/high/spleen_all_125_before.jpg",
                "after": "assets/high/spleen_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/high/spleen_all_126_before.jpg",
                "after": "assets/high/spleen_all_126_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/high/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3897,
            "centroid": 0.3921
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3166,
            "centroid": 0.3191
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260730_t2",
        "day": "20260730",
        "take": 2,
        "series": "20260730_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260730_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s6",
        "title": "20260730_t2",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.856→0.925; Spleen 0.820→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073002,
        "summary": "20260730_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.85583,
            "after": 0.92526
          },
          "spleen": {
            "before": 0.81958,
            "after": 0.96669
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260730_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260730_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260730_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260730_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260730_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260730_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260730_t2/aorta_coronal_before.jpg",
                "after": "assets/20260730_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260730_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260730_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260730_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260730_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260730_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260730_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260730_t2/spleen_coronal_before.jpg",
                "after": "assets/20260730_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260730_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3975,
            "centroid": 0.6268
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3059,
            "centroid": 0.2318
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t1",
        "day": "20260731",
        "take": 1,
        "series": "20260731_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260731_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.903→0.914; Spleen 0.933→0.956.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073101,
        "summary": "20260731_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90263,
            "after": 0.91382
          },
          "spleen": {
            "before": 0.93258,
            "after": 0.95559
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t1/aorta_coronal_before.jpg",
                "after": "assets/20260731_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t1/spleen_coronal_before.jpg",
                "after": "assets/20260731_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4659,
            "centroid": 0.3456
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4527,
            "centroid": 0.71
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t2",
        "day": "20260731",
        "take": 2,
        "series": "20260731_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s8",
        "title": "20260731_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.900→0.916; Spleen 0.929→0.958.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073102,
        "summary": "20260731_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89967,
            "after": 0.91644
          },
          "spleen": {
            "before": 0.92902,
            "after": 0.95821
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t2/aorta_coronal_before.jpg",
                "after": "assets/20260731_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t2/spleen_coronal_before.jpg",
                "after": "assets/20260731_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4434,
            "centroid": 0.3865
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4244,
            "centroid": 0.6401
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t3",
        "day": "20260731",
        "take": 3,
        "series": "20260731_t3",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s10",
        "title": "20260731_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.901→0.918; Spleen 0.934→0.952.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073103,
        "summary": "20260731_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90106,
            "after": 0.91772
          },
          "spleen": {
            "before": 0.93351,
            "after": 0.95235
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t3/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t3/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t3/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t3/aorta_coronal_before.jpg",
                "after": "assets/20260731_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t3/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t3/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t3/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t3/spleen_coronal_before.jpg",
                "after": "assets/20260731_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t3/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4389,
            "centroid": 0.4041
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4858,
            "centroid": 0.7688
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t4",
        "day": "20260731",
        "take": 4,
        "series": "20260731_t4",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s16",
        "title": "20260731_t4",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.901→0.915; Spleen 0.933→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073104,
        "summary": "20260731_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9013,
            "after": 0.91535
          },
          "spleen": {
            "before": 0.93348,
            "after": 0.96074
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t4/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t4/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t4/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t4/aorta_coronal_before.jpg",
                "after": "assets/20260731_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t4/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t4/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t4/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t4/spleen_coronal_before.jpg",
                "after": "assets/20260731_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t4/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4492,
            "centroid": 0.1575
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3947,
            "centroid": 0.505
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t5",
        "day": "20260731",
        "take": 5,
        "series": "20260731_t5",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s18",
        "title": "20260731_t5",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.901→0.913; Spleen 0.933→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073105,
        "summary": "20260731_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90095,
            "after": 0.91324
          },
          "spleen": {
            "before": 0.93344,
            "after": 0.96082
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t5/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t5/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t5/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t5/aorta_coronal_before.jpg",
                "after": "assets/20260731_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t5/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t5/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t5/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t5/spleen_coronal_before.jpg",
                "after": "assets/20260731_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t5/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4617,
            "centroid": 0.1536
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3916,
            "centroid": 0.4539
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t6",
        "day": "20260731",
        "take": 6,
        "series": "20260731_t6",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s24",
        "title": "20260731_t6",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.899→0.917; Spleen 0.929→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073106,
        "summary": "20260731_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89925,
            "after": 0.91742
          },
          "spleen": {
            "before": 0.92885,
            "after": 0.96592
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t6/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t6/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t6/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t6/aorta_coronal_before.jpg",
                "after": "assets/20260731_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t6/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t6/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t6/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t6/spleen_coronal_before.jpg",
                "after": "assets/20260731_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t6/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4381,
            "centroid": 0.0924
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3326,
            "centroid": 0.2439
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t7",
        "day": "20260731",
        "take": 7,
        "series": "20260731_t7",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s26",
        "title": "20260731_t7",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.901→0.916; Spleen 0.933→0.955.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073107,
        "summary": "20260731_t7 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90146,
            "after": 0.91623
          },
          "spleen": {
            "before": 0.93341,
            "after": 0.95459
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t7/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t7/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t7/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t7/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t7/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t7/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t7/aorta_coronal_before.jpg",
                "after": "assets/20260731_t7/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t7/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t7/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t7/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t7/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t7/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t7/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t7/spleen_coronal_before.jpg",
                "after": "assets/20260731_t7/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t7/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4456,
            "centroid": 0.3884
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4634,
            "centroid": 0.715
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t8",
        "day": "20260731",
        "take": 8,
        "series": "20260731_t8",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s32",
        "title": "20260731_t8",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.900→0.918; Spleen 0.929→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073108,
        "summary": "20260731_t8 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89954,
            "after": 0.9178
          },
          "spleen": {
            "before": 0.92901,
            "after": 0.96046
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t8/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t8/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t8/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t8/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t8/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t8/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t8/aorta_coronal_before.jpg",
                "after": "assets/20260731_t8/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t8/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t8/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t8/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t8/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t8/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t8/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t8/spleen_coronal_before.jpg",
                "after": "assets/20260731_t8/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t8/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4322,
            "centroid": 0.3085
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4001,
            "centroid": 0.5612
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t9",
        "day": "20260731",
        "take": 9,
        "series": "20260731_t9",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s34",
        "title": "20260731_t9",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.900→0.920; Spleen 0.929→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073109,
        "summary": "20260731_t9 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90016,
            "after": 0.91952
          },
          "spleen": {
            "before": 0.92922,
            "after": 0.96145
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t9/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t9/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t9/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t9/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t9/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t9/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t9/aorta_coronal_before.jpg",
                "after": "assets/20260731_t9/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t9/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t9/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t9/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t9/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t9/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t9/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t9/spleen_coronal_before.jpg",
                "after": "assets/20260731_t9/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t9/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4241,
            "centroid": 0.2442
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3849,
            "centroid": 0.4643
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "low",
        "day": "20260731",
        "take": 10,
        "series": "20260731_t10",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s40",
        "title": "Az iyileşen / düşük",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "Sınırlı kazanç",
        "note": "Kazanç sınırlı; kalan fark boundary/shape. 0731 cohort’u düşük profil.",
        "featured": true,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073110,
        "summary": "20260731_t10 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90135,
            "after": 0.91325
          },
          "spleen": {
            "before": 0.93446,
            "after": 0.9548
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/low/aorta_axial_0_before.jpg",
                "after": "assets/low/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/low/aorta_axial_1_before.jpg",
                "after": "assets/low/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/low/aorta_axial_2_before.jpg",
                "after": "assets/low/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/low/aorta_coronal_before.jpg",
                "after": "assets/low/aorta_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 27",
                "before": "assets/low/aorta_all_27_before.jpg",
                "after": "assets/low/aorta_all_27_after.jpg"
              },
              {
                "label": "z 28",
                "before": "assets/low/aorta_all_28_before.jpg",
                "after": "assets/low/aorta_all_28_after.jpg"
              },
              {
                "label": "z 29",
                "before": "assets/low/aorta_all_29_before.jpg",
                "after": "assets/low/aorta_all_29_after.jpg"
              },
              {
                "label": "z 30",
                "before": "assets/low/aorta_all_30_before.jpg",
                "after": "assets/low/aorta_all_30_after.jpg"
              },
              {
                "label": "z 31",
                "before": "assets/low/aorta_all_31_before.jpg",
                "after": "assets/low/aorta_all_31_after.jpg"
              },
              {
                "label": "z 32",
                "before": "assets/low/aorta_all_32_before.jpg",
                "after": "assets/low/aorta_all_32_after.jpg"
              },
              {
                "label": "z 33",
                "before": "assets/low/aorta_all_33_before.jpg",
                "after": "assets/low/aorta_all_33_after.jpg"
              },
              {
                "label": "z 34",
                "before": "assets/low/aorta_all_34_before.jpg",
                "after": "assets/low/aorta_all_34_after.jpg"
              },
              {
                "label": "z 35",
                "before": "assets/low/aorta_all_35_before.jpg",
                "after": "assets/low/aorta_all_35_after.jpg"
              },
              {
                "label": "z 36",
                "before": "assets/low/aorta_all_36_before.jpg",
                "after": "assets/low/aorta_all_36_after.jpg"
              },
              {
                "label": "z 37",
                "before": "assets/low/aorta_all_37_before.jpg",
                "after": "assets/low/aorta_all_37_after.jpg"
              },
              {
                "label": "z 38",
                "before": "assets/low/aorta_all_38_before.jpg",
                "after": "assets/low/aorta_all_38_after.jpg"
              },
              {
                "label": "z 39",
                "before": "assets/low/aorta_all_39_before.jpg",
                "after": "assets/low/aorta_all_39_after.jpg"
              },
              {
                "label": "z 40",
                "before": "assets/low/aorta_all_40_before.jpg",
                "after": "assets/low/aorta_all_40_after.jpg"
              },
              {
                "label": "z 41",
                "before": "assets/low/aorta_all_41_before.jpg",
                "after": "assets/low/aorta_all_41_after.jpg"
              },
              {
                "label": "z 42",
                "before": "assets/low/aorta_all_42_before.jpg",
                "after": "assets/low/aorta_all_42_after.jpg"
              },
              {
                "label": "z 43",
                "before": "assets/low/aorta_all_43_before.jpg",
                "after": "assets/low/aorta_all_43_after.jpg"
              },
              {
                "label": "z 44",
                "before": "assets/low/aorta_all_44_before.jpg",
                "after": "assets/low/aorta_all_44_after.jpg"
              },
              {
                "label": "z 45",
                "before": "assets/low/aorta_all_45_before.jpg",
                "after": "assets/low/aorta_all_45_after.jpg"
              },
              {
                "label": "z 46",
                "before": "assets/low/aorta_all_46_before.jpg",
                "after": "assets/low/aorta_all_46_after.jpg"
              },
              {
                "label": "z 47",
                "before": "assets/low/aorta_all_47_before.jpg",
                "after": "assets/low/aorta_all_47_after.jpg"
              },
              {
                "label": "z 48",
                "before": "assets/low/aorta_all_48_before.jpg",
                "after": "assets/low/aorta_all_48_after.jpg"
              },
              {
                "label": "z 49",
                "before": "assets/low/aorta_all_49_before.jpg",
                "after": "assets/low/aorta_all_49_after.jpg"
              },
              {
                "label": "z 50",
                "before": "assets/low/aorta_all_50_before.jpg",
                "after": "assets/low/aorta_all_50_after.jpg"
              },
              {
                "label": "z 51",
                "before": "assets/low/aorta_all_51_before.jpg",
                "after": "assets/low/aorta_all_51_after.jpg"
              },
              {
                "label": "z 52",
                "before": "assets/low/aorta_all_52_before.jpg",
                "after": "assets/low/aorta_all_52_after.jpg"
              },
              {
                "label": "z 53",
                "before": "assets/low/aorta_all_53_before.jpg",
                "after": "assets/low/aorta_all_53_after.jpg"
              },
              {
                "label": "z 54",
                "before": "assets/low/aorta_all_54_before.jpg",
                "after": "assets/low/aorta_all_54_after.jpg"
              },
              {
                "label": "z 55",
                "before": "assets/low/aorta_all_55_before.jpg",
                "after": "assets/low/aorta_all_55_after.jpg"
              },
              {
                "label": "z 56",
                "before": "assets/low/aorta_all_56_before.jpg",
                "after": "assets/low/aorta_all_56_after.jpg"
              },
              {
                "label": "z 57",
                "before": "assets/low/aorta_all_57_before.jpg",
                "after": "assets/low/aorta_all_57_after.jpg"
              },
              {
                "label": "z 58",
                "before": "assets/low/aorta_all_58_before.jpg",
                "after": "assets/low/aorta_all_58_after.jpg"
              },
              {
                "label": "z 59",
                "before": "assets/low/aorta_all_59_before.jpg",
                "after": "assets/low/aorta_all_59_after.jpg"
              },
              {
                "label": "z 60",
                "before": "assets/low/aorta_all_60_before.jpg",
                "after": "assets/low/aorta_all_60_after.jpg"
              },
              {
                "label": "z 61",
                "before": "assets/low/aorta_all_61_before.jpg",
                "after": "assets/low/aorta_all_61_after.jpg"
              },
              {
                "label": "z 62",
                "before": "assets/low/aorta_all_62_before.jpg",
                "after": "assets/low/aorta_all_62_after.jpg"
              },
              {
                "label": "z 63",
                "before": "assets/low/aorta_all_63_before.jpg",
                "after": "assets/low/aorta_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/low/aorta_all_64_before.jpg",
                "after": "assets/low/aorta_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/low/aorta_all_65_before.jpg",
                "after": "assets/low/aorta_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/low/aorta_all_66_before.jpg",
                "after": "assets/low/aorta_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/low/aorta_all_67_before.jpg",
                "after": "assets/low/aorta_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/low/aorta_all_68_before.jpg",
                "after": "assets/low/aorta_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/low/aorta_all_69_before.jpg",
                "after": "assets/low/aorta_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/low/aorta_all_70_before.jpg",
                "after": "assets/low/aorta_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/low/aorta_all_71_before.jpg",
                "after": "assets/low/aorta_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/low/aorta_all_72_before.jpg",
                "after": "assets/low/aorta_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/low/aorta_all_73_before.jpg",
                "after": "assets/low/aorta_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/low/aorta_all_74_before.jpg",
                "after": "assets/low/aorta_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/low/aorta_all_75_before.jpg",
                "after": "assets/low/aorta_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/low/aorta_all_76_before.jpg",
                "after": "assets/low/aorta_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/low/aorta_all_77_before.jpg",
                "after": "assets/low/aorta_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/low/aorta_all_78_before.jpg",
                "after": "assets/low/aorta_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/low/aorta_all_79_before.jpg",
                "after": "assets/low/aorta_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/low/aorta_all_80_before.jpg",
                "after": "assets/low/aorta_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/low/aorta_all_81_before.jpg",
                "after": "assets/low/aorta_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/low/aorta_all_82_before.jpg",
                "after": "assets/low/aorta_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/low/aorta_all_83_before.jpg",
                "after": "assets/low/aorta_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/low/aorta_all_84_before.jpg",
                "after": "assets/low/aorta_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/low/aorta_all_85_before.jpg",
                "after": "assets/low/aorta_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/low/aorta_all_86_before.jpg",
                "after": "assets/low/aorta_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/low/aorta_all_87_before.jpg",
                "after": "assets/low/aorta_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/low/aorta_all_88_before.jpg",
                "after": "assets/low/aorta_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/low/aorta_all_89_before.jpg",
                "after": "assets/low/aorta_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/low/aorta_all_90_before.jpg",
                "after": "assets/low/aorta_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/low/aorta_all_91_before.jpg",
                "after": "assets/low/aorta_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/low/aorta_all_92_before.jpg",
                "after": "assets/low/aorta_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/low/aorta_all_93_before.jpg",
                "after": "assets/low/aorta_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/low/aorta_all_94_before.jpg",
                "after": "assets/low/aorta_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/low/aorta_all_95_before.jpg",
                "after": "assets/low/aorta_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/low/aorta_all_96_before.jpg",
                "after": "assets/low/aorta_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/low/aorta_all_97_before.jpg",
                "after": "assets/low/aorta_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/low/aorta_all_98_before.jpg",
                "after": "assets/low/aorta_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/low/aorta_all_99_before.jpg",
                "after": "assets/low/aorta_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/low/aorta_all_100_before.jpg",
                "after": "assets/low/aorta_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/low/aorta_all_101_before.jpg",
                "after": "assets/low/aorta_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/low/aorta_all_102_before.jpg",
                "after": "assets/low/aorta_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/low/aorta_all_103_before.jpg",
                "after": "assets/low/aorta_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/low/aorta_all_104_before.jpg",
                "after": "assets/low/aorta_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/low/aorta_all_105_before.jpg",
                "after": "assets/low/aorta_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/low/aorta_all_106_before.jpg",
                "after": "assets/low/aorta_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/low/aorta_all_107_before.jpg",
                "after": "assets/low/aorta_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/low/aorta_all_108_before.jpg",
                "after": "assets/low/aorta_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/low/aorta_all_109_before.jpg",
                "after": "assets/low/aorta_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/low/aorta_all_110_before.jpg",
                "after": "assets/low/aorta_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/low/aorta_all_111_before.jpg",
                "after": "assets/low/aorta_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/low/aorta_all_112_before.jpg",
                "after": "assets/low/aorta_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/low/aorta_all_113_before.jpg",
                "after": "assets/low/aorta_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/low/aorta_all_114_before.jpg",
                "after": "assets/low/aorta_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/low/aorta_all_115_before.jpg",
                "after": "assets/low/aorta_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/low/aorta_all_116_before.jpg",
                "after": "assets/low/aorta_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/low/aorta_all_117_before.jpg",
                "after": "assets/low/aorta_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/low/aorta_all_118_before.jpg",
                "after": "assets/low/aorta_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/low/aorta_all_119_before.jpg",
                "after": "assets/low/aorta_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/low/aorta_all_120_before.jpg",
                "after": "assets/low/aorta_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/low/aorta_all_121_before.jpg",
                "after": "assets/low/aorta_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/low/aorta_all_122_before.jpg",
                "after": "assets/low/aorta_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/low/aorta_all_123_before.jpg",
                "after": "assets/low/aorta_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/low/aorta_all_124_before.jpg",
                "after": "assets/low/aorta_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/low/aorta_all_125_before.jpg",
                "after": "assets/low/aorta_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/low/aorta_all_126_before.jpg",
                "after": "assets/low/aorta_all_126_after.jpg"
              },
              {
                "label": "z 127",
                "before": "assets/low/aorta_all_127_before.jpg",
                "after": "assets/low/aorta_all_127_after.jpg"
              },
              {
                "label": "z 128",
                "before": "assets/low/aorta_all_128_before.jpg",
                "after": "assets/low/aorta_all_128_after.jpg"
              },
              {
                "label": "z 129",
                "before": "assets/low/aorta_all_129_before.jpg",
                "after": "assets/low/aorta_all_129_after.jpg"
              },
              {
                "label": "z 130",
                "before": "assets/low/aorta_all_130_before.jpg",
                "after": "assets/low/aorta_all_130_after.jpg"
              },
              {
                "label": "z 131",
                "before": "assets/low/aorta_all_131_before.jpg",
                "after": "assets/low/aorta_all_131_after.jpg"
              },
              {
                "label": "z 132",
                "before": "assets/low/aorta_all_132_before.jpg",
                "after": "assets/low/aorta_all_132_after.jpg"
              },
              {
                "label": "z 133",
                "before": "assets/low/aorta_all_133_before.jpg",
                "after": "assets/low/aorta_all_133_after.jpg"
              },
              {
                "label": "z 134",
                "before": "assets/low/aorta_all_134_before.jpg",
                "after": "assets/low/aorta_all_134_after.jpg"
              },
              {
                "label": "z 135",
                "before": "assets/low/aorta_all_135_before.jpg",
                "after": "assets/low/aorta_all_135_after.jpg"
              },
              {
                "label": "z 136",
                "before": "assets/low/aorta_all_136_before.jpg",
                "after": "assets/low/aorta_all_136_after.jpg"
              },
              {
                "label": "z 137",
                "before": "assets/low/aorta_all_137_before.jpg",
                "after": "assets/low/aorta_all_137_after.jpg"
              },
              {
                "label": "z 138",
                "before": "assets/low/aorta_all_138_before.jpg",
                "after": "assets/low/aorta_all_138_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/low/spleen_axial_0_before.jpg",
                "after": "assets/low/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/low/spleen_axial_1_before.jpg",
                "after": "assets/low/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/low/spleen_axial_2_before.jpg",
                "after": "assets/low/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/low/spleen_coronal_before.jpg",
                "after": "assets/low/spleen_coronal_after.jpg"
              }
            ],
            "all": [
              {
                "label": "z 63",
                "before": "assets/low/spleen_all_63_before.jpg",
                "after": "assets/low/spleen_all_63_after.jpg"
              },
              {
                "label": "z 64",
                "before": "assets/low/spleen_all_64_before.jpg",
                "after": "assets/low/spleen_all_64_after.jpg"
              },
              {
                "label": "z 65",
                "before": "assets/low/spleen_all_65_before.jpg",
                "after": "assets/low/spleen_all_65_after.jpg"
              },
              {
                "label": "z 66",
                "before": "assets/low/spleen_all_66_before.jpg",
                "after": "assets/low/spleen_all_66_after.jpg"
              },
              {
                "label": "z 67",
                "before": "assets/low/spleen_all_67_before.jpg",
                "after": "assets/low/spleen_all_67_after.jpg"
              },
              {
                "label": "z 68",
                "before": "assets/low/spleen_all_68_before.jpg",
                "after": "assets/low/spleen_all_68_after.jpg"
              },
              {
                "label": "z 69",
                "before": "assets/low/spleen_all_69_before.jpg",
                "after": "assets/low/spleen_all_69_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/low/spleen_all_70_before.jpg",
                "after": "assets/low/spleen_all_70_after.jpg"
              },
              {
                "label": "z 71",
                "before": "assets/low/spleen_all_71_before.jpg",
                "after": "assets/low/spleen_all_71_after.jpg"
              },
              {
                "label": "z 72",
                "before": "assets/low/spleen_all_72_before.jpg",
                "after": "assets/low/spleen_all_72_after.jpg"
              },
              {
                "label": "z 73",
                "before": "assets/low/spleen_all_73_before.jpg",
                "after": "assets/low/spleen_all_73_after.jpg"
              },
              {
                "label": "z 74",
                "before": "assets/low/spleen_all_74_before.jpg",
                "after": "assets/low/spleen_all_74_after.jpg"
              },
              {
                "label": "z 75",
                "before": "assets/low/spleen_all_75_before.jpg",
                "after": "assets/low/spleen_all_75_after.jpg"
              },
              {
                "label": "z 76",
                "before": "assets/low/spleen_all_76_before.jpg",
                "after": "assets/low/spleen_all_76_after.jpg"
              },
              {
                "label": "z 77",
                "before": "assets/low/spleen_all_77_before.jpg",
                "after": "assets/low/spleen_all_77_after.jpg"
              },
              {
                "label": "z 78",
                "before": "assets/low/spleen_all_78_before.jpg",
                "after": "assets/low/spleen_all_78_after.jpg"
              },
              {
                "label": "z 79",
                "before": "assets/low/spleen_all_79_before.jpg",
                "after": "assets/low/spleen_all_79_after.jpg"
              },
              {
                "label": "z 80",
                "before": "assets/low/spleen_all_80_before.jpg",
                "after": "assets/low/spleen_all_80_after.jpg"
              },
              {
                "label": "z 81",
                "before": "assets/low/spleen_all_81_before.jpg",
                "after": "assets/low/spleen_all_81_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/low/spleen_all_82_before.jpg",
                "after": "assets/low/spleen_all_82_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/low/spleen_all_83_before.jpg",
                "after": "assets/low/spleen_all_83_after.jpg"
              },
              {
                "label": "z 84",
                "before": "assets/low/spleen_all_84_before.jpg",
                "after": "assets/low/spleen_all_84_after.jpg"
              },
              {
                "label": "z 85",
                "before": "assets/low/spleen_all_85_before.jpg",
                "after": "assets/low/spleen_all_85_after.jpg"
              },
              {
                "label": "z 86",
                "before": "assets/low/spleen_all_86_before.jpg",
                "after": "assets/low/spleen_all_86_after.jpg"
              },
              {
                "label": "z 87",
                "before": "assets/low/spleen_all_87_before.jpg",
                "after": "assets/low/spleen_all_87_after.jpg"
              },
              {
                "label": "z 88",
                "before": "assets/low/spleen_all_88_before.jpg",
                "after": "assets/low/spleen_all_88_after.jpg"
              },
              {
                "label": "z 89",
                "before": "assets/low/spleen_all_89_before.jpg",
                "after": "assets/low/spleen_all_89_after.jpg"
              },
              {
                "label": "z 90",
                "before": "assets/low/spleen_all_90_before.jpg",
                "after": "assets/low/spleen_all_90_after.jpg"
              },
              {
                "label": "z 91",
                "before": "assets/low/spleen_all_91_before.jpg",
                "after": "assets/low/spleen_all_91_after.jpg"
              },
              {
                "label": "z 92",
                "before": "assets/low/spleen_all_92_before.jpg",
                "after": "assets/low/spleen_all_92_after.jpg"
              },
              {
                "label": "z 93",
                "before": "assets/low/spleen_all_93_before.jpg",
                "after": "assets/low/spleen_all_93_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/low/spleen_all_94_before.jpg",
                "after": "assets/low/spleen_all_94_after.jpg"
              },
              {
                "label": "z 95",
                "before": "assets/low/spleen_all_95_before.jpg",
                "after": "assets/low/spleen_all_95_after.jpg"
              },
              {
                "label": "z 96",
                "before": "assets/low/spleen_all_96_before.jpg",
                "after": "assets/low/spleen_all_96_after.jpg"
              },
              {
                "label": "z 97",
                "before": "assets/low/spleen_all_97_before.jpg",
                "after": "assets/low/spleen_all_97_after.jpg"
              },
              {
                "label": "z 98",
                "before": "assets/low/spleen_all_98_before.jpg",
                "after": "assets/low/spleen_all_98_after.jpg"
              },
              {
                "label": "z 99",
                "before": "assets/low/spleen_all_99_before.jpg",
                "after": "assets/low/spleen_all_99_after.jpg"
              },
              {
                "label": "z 100",
                "before": "assets/low/spleen_all_100_before.jpg",
                "after": "assets/low/spleen_all_100_after.jpg"
              },
              {
                "label": "z 101",
                "before": "assets/low/spleen_all_101_before.jpg",
                "after": "assets/low/spleen_all_101_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/low/spleen_all_102_before.jpg",
                "after": "assets/low/spleen_all_102_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/low/spleen_all_103_before.jpg",
                "after": "assets/low/spleen_all_103_after.jpg"
              },
              {
                "label": "z 104",
                "before": "assets/low/spleen_all_104_before.jpg",
                "after": "assets/low/spleen_all_104_after.jpg"
              },
              {
                "label": "z 105",
                "before": "assets/low/spleen_all_105_before.jpg",
                "after": "assets/low/spleen_all_105_after.jpg"
              },
              {
                "label": "z 106",
                "before": "assets/low/spleen_all_106_before.jpg",
                "after": "assets/low/spleen_all_106_after.jpg"
              },
              {
                "label": "z 107",
                "before": "assets/low/spleen_all_107_before.jpg",
                "after": "assets/low/spleen_all_107_after.jpg"
              },
              {
                "label": "z 108",
                "before": "assets/low/spleen_all_108_before.jpg",
                "after": "assets/low/spleen_all_108_after.jpg"
              },
              {
                "label": "z 109",
                "before": "assets/low/spleen_all_109_before.jpg",
                "after": "assets/low/spleen_all_109_after.jpg"
              },
              {
                "label": "z 110",
                "before": "assets/low/spleen_all_110_before.jpg",
                "after": "assets/low/spleen_all_110_after.jpg"
              },
              {
                "label": "z 111",
                "before": "assets/low/spleen_all_111_before.jpg",
                "after": "assets/low/spleen_all_111_after.jpg"
              },
              {
                "label": "z 112",
                "before": "assets/low/spleen_all_112_before.jpg",
                "after": "assets/low/spleen_all_112_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/low/spleen_all_113_before.jpg",
                "after": "assets/low/spleen_all_113_after.jpg"
              },
              {
                "label": "z 114",
                "before": "assets/low/spleen_all_114_before.jpg",
                "after": "assets/low/spleen_all_114_after.jpg"
              },
              {
                "label": "z 115",
                "before": "assets/low/spleen_all_115_before.jpg",
                "after": "assets/low/spleen_all_115_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/low/spleen_all_116_before.jpg",
                "after": "assets/low/spleen_all_116_after.jpg"
              },
              {
                "label": "z 117",
                "before": "assets/low/spleen_all_117_before.jpg",
                "after": "assets/low/spleen_all_117_after.jpg"
              },
              {
                "label": "z 118",
                "before": "assets/low/spleen_all_118_before.jpg",
                "after": "assets/low/spleen_all_118_after.jpg"
              },
              {
                "label": "z 119",
                "before": "assets/low/spleen_all_119_before.jpg",
                "after": "assets/low/spleen_all_119_after.jpg"
              },
              {
                "label": "z 120",
                "before": "assets/low/spleen_all_120_before.jpg",
                "after": "assets/low/spleen_all_120_after.jpg"
              },
              {
                "label": "z 121",
                "before": "assets/low/spleen_all_121_before.jpg",
                "after": "assets/low/spleen_all_121_after.jpg"
              },
              {
                "label": "z 122",
                "before": "assets/low/spleen_all_122_before.jpg",
                "after": "assets/low/spleen_all_122_after.jpg"
              },
              {
                "label": "z 123",
                "before": "assets/low/spleen_all_123_before.jpg",
                "after": "assets/low/spleen_all_123_after.jpg"
              },
              {
                "label": "z 124",
                "before": "assets/low/spleen_all_124_before.jpg",
                "after": "assets/low/spleen_all_124_after.jpg"
              },
              {
                "label": "z 125",
                "before": "assets/low/spleen_all_125_before.jpg",
                "after": "assets/low/spleen_all_125_after.jpg"
              },
              {
                "label": "z 126",
                "before": "assets/low/spleen_all_126_before.jpg",
                "after": "assets/low/spleen_all_126_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/low/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4662,
            "centroid": 0.2546
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4601,
            "centroid": 0.7222
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t11",
        "day": "20260731",
        "take": 11,
        "series": "20260731_t11",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s42",
        "title": "20260731_t11",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.899→0.914; Spleen 0.930→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073111,
        "summary": "20260731_t11 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.8989,
            "after": 0.91438
          },
          "spleen": {
            "before": 0.92953,
            "after": 0.95964
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t11/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t11/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t11/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t11/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t11/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t11/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t11/aorta_coronal_before.jpg",
                "after": "assets/20260731_t11/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t11/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t11/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t11/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t11/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t11/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t11/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t11/spleen_coronal_before.jpg",
                "after": "assets/20260731_t11/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t11/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4571,
            "centroid": 0.3037
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4078,
            "centroid": 0.5407
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t12",
        "day": "20260731",
        "take": 12,
        "series": "20260731_t12",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s48",
        "title": "20260731_t12",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.899→0.920; Spleen 0.930→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073112,
        "summary": "20260731_t12 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89906,
            "after": 0.9198
          },
          "spleen": {
            "before": 0.92958,
            "after": 0.96258
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t12/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t12/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t12/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t12/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t12/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t12/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t12/aorta_coronal_before.jpg",
                "after": "assets/20260731_t12/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t12/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t12/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t12/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t12/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t12/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t12/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t12/spleen_coronal_before.jpg",
                "after": "assets/20260731_t12/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t12/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4226,
            "centroid": 0.1228
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3728,
            "centroid": 0.4093
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t13",
        "day": "20260731",
        "take": 13,
        "series": "20260731_t13",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s50",
        "title": "20260731_t13",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.898→0.918; Spleen 0.930→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073113,
        "summary": "20260731_t13 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89819,
            "after": 0.91796
          },
          "spleen": {
            "before": 0.92979,
            "after": 0.96169
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t13/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t13/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t13/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t13/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t13/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t13/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t13/aorta_coronal_before.jpg",
                "after": "assets/20260731_t13/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t13/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t13/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t13/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t13/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t13/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t13/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t13/spleen_coronal_before.jpg",
                "after": "assets/20260731_t13/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t13/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4317,
            "centroid": 0.3633
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3864,
            "centroid": 0.4928
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t14",
        "day": "20260731",
        "take": 14,
        "series": "20260731_t14",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s56",
        "title": "20260731_t14",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.902→0.918; Spleen 0.935→0.955.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073114,
        "summary": "20260731_t14 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90228,
            "after": 0.91834
          },
          "spleen": {
            "before": 0.93473,
            "after": 0.95526
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t14/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t14/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t14/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t14/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t14/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t14/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t14/aorta_coronal_before.jpg",
                "after": "assets/20260731_t14/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t14/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t14/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t14/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t14/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t14/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t14/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t14/spleen_coronal_before.jpg",
                "after": "assets/20260731_t14/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t14/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4361,
            "centroid": 0.2785
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4541,
            "centroid": 0.6491
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t15",
        "day": "20260731",
        "take": 15,
        "series": "20260731_t15",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s58",
        "title": "20260731_t15",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.902→0.916; Spleen 0.935→0.956.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073115,
        "summary": "20260731_t15 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90177,
            "after": 0.91607
          },
          "spleen": {
            "before": 0.93477,
            "after": 0.95607
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t15/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t15/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t15/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t15/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t15/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t15/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t15/aorta_coronal_before.jpg",
                "after": "assets/20260731_t15/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t15/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t15/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t15/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t15/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t15/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t15/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t15/spleen_coronal_before.jpg",
                "after": "assets/20260731_t15/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t15/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4471,
            "centroid": 0.3108
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4457,
            "centroid": 0.6346
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t16",
        "day": "20260731",
        "take": 16,
        "series": "20260731_t16",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s64",
        "title": "20260731_t16",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.903→0.914; Spleen 0.934→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073116,
        "summary": "20260731_t16 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90282,
            "after": 0.9137
          },
          "spleen": {
            "before": 0.93435,
            "after": 0.95904
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t16/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t16/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t16/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t16/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t16/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t16/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t16/aorta_coronal_before.jpg",
                "after": "assets/20260731_t16/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t16/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t16/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t16/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t16/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t16/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t16/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t16/spleen_coronal_before.jpg",
                "after": "assets/20260731_t16/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t16/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4597,
            "centroid": 0.289
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4168,
            "centroid": 0.6107
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t17",
        "day": "20260731",
        "take": 17,
        "series": "20260731_t17",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s66",
        "title": "20260731_t17",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.903→0.917; Spleen 0.935→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073117,
        "summary": "20260731_t17 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90295,
            "after": 0.91691
          },
          "spleen": {
            "before": 0.93481,
            "after": 0.95919
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t17/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t17/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t17/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t17/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t17/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t17/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t17/aorta_coronal_before.jpg",
                "after": "assets/20260731_t17/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t17/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t17/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t17/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t17/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t17/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t17/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t17/spleen_coronal_before.jpg",
                "after": "assets/20260731_t17/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t17/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4439,
            "centroid": 0.2929
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4151,
            "centroid": 0.6152
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t18",
        "day": "20260731",
        "take": 18,
        "series": "20260731_t18",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s72",
        "title": "20260731_t18",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.898→0.916; Spleen 0.930→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073118,
        "summary": "20260731_t18 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89761,
            "after": 0.91633
          },
          "spleen": {
            "before": 0.93035,
            "after": 0.95937
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t18/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t18/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t18/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t18/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t18/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t18/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t18/aorta_coronal_before.jpg",
                "after": "assets/20260731_t18/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t18/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t18/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t18/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t18/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t18/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t18/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t18/spleen_coronal_before.jpg",
                "after": "assets/20260731_t18/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t18/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.441,
            "centroid": 0.5718
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4125,
            "centroid": 0.5934
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t19",
        "day": "20260731",
        "take": 19,
        "series": "20260731_t19",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s74",
        "title": "20260731_t19",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.901→0.913; Spleen 0.935→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073119,
        "summary": "20260731_t19 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90091,
            "after": 0.91287
          },
          "spleen": {
            "before": 0.93537,
            "after": 0.96031
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t19/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t19/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t19/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t19/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t19/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t19/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t19/aorta_coronal_before.jpg",
                "after": "assets/20260731_t19/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t19/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t19/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t19/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t19/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t19/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t19/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t19/spleen_coronal_before.jpg",
                "after": "assets/20260731_t19/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t19/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4651,
            "centroid": 0.2471
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4002,
            "centroid": 0.5107
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260731_t20",
        "day": "20260731",
        "take": 20,
        "series": "20260731_t20",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260731_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s80",
        "title": "20260731_t20",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: recon_grid_anomaly. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "recon_grid_anomaly",
        "inWorkbook": false,
        "order": 2026073120,
        "summary": "20260731_t20 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.75933,
            "after": 0.84175
          },
          "spleen": {
            "before": 0.65917,
            "after": 0.87972
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260731_t20/aorta_axial_0_before.jpg",
                "after": "assets/20260731_t20/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260731_t20/aorta_axial_1_before.jpg",
                "after": "assets/20260731_t20/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260731_t20/aorta_axial_2_before.jpg",
                "after": "assets/20260731_t20/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260731_t20/aorta_coronal_before.jpg",
                "after": "assets/20260731_t20/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260731_t20/spleen_axial_0_before.jpg",
                "after": "assets/20260731_t20/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260731_t20/spleen_axial_1_before.jpg",
                "after": "assets/20260731_t20/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260731_t20/spleen_axial_2_before.jpg",
                "after": "assets/20260731_t20/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260731_t20/spleen_coronal_before.jpg",
                "after": "assets/20260731_t20/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260731_t20/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 4.1681,
            "assd": 1.2296,
            "centroid": 7.923
          },
          "spleen": {
            "hd95": 5.1355,
            "assd": 1.4859,
            "centroid": 3.3222
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      },
      {
        "id": "20260805_t2",
        "day": "20260805",
        "take": 2,
        "series": "20260805_t2",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s8",
        "title": "20260805_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.985→0.985; Spleen 0.996→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080502,
        "summary": "20260805_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98522,
            "after": 0.98522
          },
          "spleen": {
            "before": 0.9958,
            "after": 0.9958
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t2/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t2/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t2/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t2/aorta_coronal_before.jpg",
                "after": "assets/20260805_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t2/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t2/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t2/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t2/spleen_coronal_before.jpg",
                "after": "assets/20260805_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t2/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0852,
            "centroid": 0.4423
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0423,
            "centroid": 0.0277
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t3",
        "day": "20260805",
        "take": 3,
        "series": "20260805_t3",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s10",
        "title": "20260805_t3",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080503,
        "summary": "20260805_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.95054,
            "after": 0.95054
          },
          "spleen": {
            "before": 0.97851,
            "after": 0.97851
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t3/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t3/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t3/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t3/aorta_coronal_before.jpg",
                "after": "assets/20260805_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t3/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t3/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t3/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t3/spleen_coronal_before.jpg",
                "after": "assets/20260805_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t3/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2648,
            "centroid": 0.2276
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1927,
            "centroid": 0.1531
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t4",
        "day": "20260805",
        "take": 4,
        "series": "20260805_t4",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s16",
        "title": "20260805_t4",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.986→0.986; Spleen 0.996→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080504,
        "summary": "20260805_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98587,
            "after": 0.98587
          },
          "spleen": {
            "before": 0.99583,
            "after": 0.99583
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t4/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t4/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t4/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t4/aorta_coronal_before.jpg",
                "after": "assets/20260805_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t4/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t4/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t4/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t4/spleen_coronal_before.jpg",
                "after": "assets/20260805_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t4/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0843,
            "centroid": 0.151
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0413,
            "centroid": 0.0342
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t5",
        "day": "20260805",
        "take": 5,
        "series": "20260805_t5",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s18",
        "title": "20260805_t5",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080505,
        "summary": "20260805_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.95108,
            "after": 0.95108
          },
          "spleen": {
            "before": 0.97914,
            "after": 0.97914
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t5/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t5/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t5/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t5/aorta_coronal_before.jpg",
                "after": "assets/20260805_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t5/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t5/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t5/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t5/spleen_coronal_before.jpg",
                "after": "assets/20260805_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t5/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2622,
            "centroid": 0.1726
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.188,
            "centroid": 0.1291
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t6",
        "day": "20260805",
        "take": 6,
        "series": "20260805_t6",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s24",
        "title": "20260805_t6",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080506,
        "summary": "20260805_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.95181,
            "after": 0.95181
          },
          "spleen": {
            "before": 0.97842,
            "after": 0.97842
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t6/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t6/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t6/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t6/aorta_coronal_before.jpg",
                "after": "assets/20260805_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t6/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t6/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t6/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t6/spleen_coronal_before.jpg",
                "after": "assets/20260805_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t6/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2591,
            "centroid": 0.154
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1945,
            "centroid": 0.1543
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t7",
        "day": "20260805",
        "take": 7,
        "series": "20260805_t7",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s26",
        "title": "20260805_t7",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.987→0.987; Spleen 0.996→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080507,
        "summary": "20260805_t7 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9867,
            "after": 0.9867
          },
          "spleen": {
            "before": 0.99566,
            "after": 0.99566
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t7/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t7/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t7/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t7/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t7/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t7/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t7/aorta_coronal_before.jpg",
                "after": "assets/20260805_t7/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t7/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t7/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t7/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t7/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t7/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t7/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t7/spleen_coronal_before.jpg",
                "after": "assets/20260805_t7/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t7/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0787,
            "centroid": 0.1605
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0427,
            "centroid": 0.0372
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t8",
        "day": "20260805",
        "take": 8,
        "series": "20260805_t8",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s32",
        "title": "20260805_t8",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080508,
        "summary": "20260805_t8 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93491,
            "after": 0.94303
          },
          "spleen": {
            "before": 0.97199,
            "after": 0.97851
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t8/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t8/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t8/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t8/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t8/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t8/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t8/aorta_coronal_before.jpg",
                "after": "assets/20260805_t8/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t8/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t8/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t8/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t8/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t8/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t8/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t8/spleen_coronal_before.jpg",
                "after": "assets/20260805_t8/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t8/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3016,
            "centroid": 0.9355
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1958,
            "centroid": 0.2003
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t9",
        "day": "20260805",
        "take": 9,
        "series": "20260805_t9",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s34",
        "title": "20260805_t9",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.983→0.983; Spleen 0.995→0.995.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080509,
        "summary": "20260805_t9 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98336,
            "after": 0.98336
          },
          "spleen": {
            "before": 0.99541,
            "after": 0.99541
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t9/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t9/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t9/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t9/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t9/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t9/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t9/aorta_coronal_before.jpg",
                "after": "assets/20260805_t9/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t9/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t9/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t9/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t9/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t9/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t9/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t9/spleen_coronal_before.jpg",
                "after": "assets/20260805_t9/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t9/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.0953,
            "centroid": 0.5398
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0457,
            "centroid": 0.0654
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t10",
        "day": "20260805",
        "take": 10,
        "series": "20260805_t10",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s40",
        "title": "20260805_t10",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.985→0.985; Spleen 0.996→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080510,
        "summary": "20260805_t10 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98531,
            "after": 0.98531
          },
          "spleen": {
            "before": 0.99569,
            "after": 0.99569
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t10/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t10/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t10/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t10/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t10/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t10/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t10/aorta_coronal_before.jpg",
                "after": "assets/20260805_t10/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t10/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t10/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t10/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t10/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t10/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t10/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t10/spleen_coronal_before.jpg",
                "after": "assets/20260805_t10/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t10/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0847,
            "centroid": 0.1066
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0425,
            "centroid": 0.0565
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t11",
        "day": "20260805",
        "take": 11,
        "series": "20260805_t11",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s42",
        "title": "20260805_t11",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.949→0.989; Spleen 0.977→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080511,
        "summary": "20260805_t11 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94856,
            "after": 0.9885
          },
          "spleen": {
            "before": 0.97736,
            "after": 0.99551
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t11/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t11/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t11/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t11/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t11/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t11/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t11/aorta_coronal_before.jpg",
                "after": "assets/20260805_t11/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t11/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t11/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t11/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t11/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t11/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t11/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t11/spleen_coronal_before.jpg",
                "after": "assets/20260805_t11/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t11/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0678,
            "centroid": 0.2973
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0435,
            "centroid": 0.0496
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t12",
        "day": "20260805",
        "take": 12,
        "series": "20260805_t12",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s48",
        "title": "20260805_t12",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.985→0.985; Spleen 0.995→0.995.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080512,
        "summary": "20260805_t12 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98546,
            "after": 0.98546
          },
          "spleen": {
            "before": 0.99478,
            "after": 0.99478
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t12/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t12/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t12/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t12/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t12/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t12/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t12/aorta_coronal_before.jpg",
                "after": "assets/20260805_t12/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t12/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t12/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t12/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t12/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t12/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t12/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t12/spleen_coronal_before.jpg",
                "after": "assets/20260805_t12/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t12/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.083,
            "centroid": 0.0614
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0518,
            "centroid": 0.0706
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t13",
        "day": "20260805",
        "take": 13,
        "series": "20260805_t13",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s50",
        "title": "20260805_t13",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.944→0.983; Spleen 0.977→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080513,
        "summary": "20260805_t13 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94427,
            "after": 0.98316
          },
          "spleen": {
            "before": 0.97731,
            "after": 0.99557
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t13/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t13/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t13/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t13/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t13/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t13/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t13/aorta_coronal_before.jpg",
                "after": "assets/20260805_t13/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t13/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t13/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t13/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t13/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t13/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t13/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t13/spleen_coronal_before.jpg",
                "after": "assets/20260805_t13/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t13/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.0975,
            "centroid": 0.2541
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0435,
            "centroid": 0.03
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t14",
        "day": "20260805",
        "take": 14,
        "series": "20260805_t14",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s56",
        "title": "20260805_t14",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.987→0.987; Spleen 0.995→0.995.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080514,
        "summary": "20260805_t14 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98674,
            "after": 0.98674
          },
          "spleen": {
            "before": 0.99549,
            "after": 0.99549
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t14/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t14/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t14/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t14/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t14/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t14/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t14/aorta_coronal_before.jpg",
                "after": "assets/20260805_t14/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t14/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t14/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t14/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t14/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t14/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t14/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t14/spleen_coronal_before.jpg",
                "after": "assets/20260805_t14/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t14/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0775,
            "centroid": 0.1056
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0447,
            "centroid": 0.0566
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t15",
        "day": "20260805",
        "take": 15,
        "series": "20260805_t15",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s58",
        "title": "20260805_t15",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.986→0.986; Spleen 0.996→0.996.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080515,
        "summary": "20260805_t15 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.98627,
            "after": 0.98627
          },
          "spleen": {
            "before": 0.99632,
            "after": 0.99632
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t15/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t15/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t15/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t15/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t15/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t15/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t15/aorta_coronal_before.jpg",
                "after": "assets/20260805_t15/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t15/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t15/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t15/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t15/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t15/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t15/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t15/spleen_coronal_before.jpg",
                "after": "assets/20260805_t15/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t15/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.081,
            "centroid": 0.0838
          },
          "spleen": {
            "hd95": 0.0,
            "assd": 0.0363,
            "centroid": 0.0603
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t16",
        "day": "20260805",
        "take": 16,
        "series": "20260805_t16",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s64",
        "title": "20260805_t16",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.946→0.986; Spleen 0.977→0.995.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080516,
        "summary": "20260805_t16 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94643,
            "after": 0.98551
          },
          "spleen": {
            "before": 0.977,
            "after": 0.99502
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t16/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t16/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t16/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t16/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t16/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t16/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t16/aorta_coronal_before.jpg",
                "after": "assets/20260805_t16/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t16/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t16/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t16/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t16/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t16/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t16/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t16/spleen_coronal_before.jpg",
                "after": "assets/20260805_t16/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t16/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.0855,
            "centroid": 0.4318
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0498,
            "centroid": 0.0943
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t17",
        "day": "20260805",
        "take": 17,
        "series": "20260805_t17",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s66",
        "title": "20260805_t17",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.944→0.982; Spleen 0.977→0.995.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080517,
        "summary": "20260805_t17 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94419,
            "after": 0.98232
          },
          "spleen": {
            "before": 0.97672,
            "after": 0.99505
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t17/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t17/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t17/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t17/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t17/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t17/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t17/aorta_coronal_before.jpg",
                "after": "assets/20260805_t17/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t17/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t17/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t17/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t17/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t17/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t17/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t17/spleen_coronal_before.jpg",
                "after": "assets/20260805_t17/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t17/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1032,
            "centroid": 0.4399
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.0488,
            "centroid": 0.0826
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t18",
        "day": "20260805",
        "take": 18,
        "series": "20260805_t18",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s72",
        "title": "20260805_t18",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080518,
        "summary": "20260805_t18 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94477,
            "after": 0.94477
          },
          "spleen": {
            "before": 0.97796,
            "after": 0.97796
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t18/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t18/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t18/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t18/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t18/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t18/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t18/aorta_coronal_before.jpg",
                "after": "assets/20260805_t18/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t18/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t18/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t18/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t18/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t18/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t18/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t18/spleen_coronal_before.jpg",
                "after": "assets/20260805_t18/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t18/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2921,
            "centroid": 0.6518
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2008,
            "centroid": 0.1885
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t19",
        "day": "20260805",
        "take": 19,
        "series": "20260805_t19",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s74",
        "title": "20260805_t19",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080519,
        "summary": "20260805_t19 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.95246,
            "after": 0.95246
          },
          "spleen": {
            "before": 0.97894,
            "after": 0.97894
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t19/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t19/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t19/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t19/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t19/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t19/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t19/aorta_coronal_before.jpg",
                "after": "assets/20260805_t19/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t19/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t19/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t19/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t19/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t19/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t19/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t19/spleen_coronal_before.jpg",
                "after": "assets/20260805_t19/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t19/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2553,
            "centroid": 0.1066
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1886,
            "centroid": 0.121
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260805_t20",
        "day": "20260805",
        "take": 20,
        "series": "20260805_t20",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260805_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm_s80",
        "title": "20260805_t20",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: low_label_artifact. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "low_label_artifact",
        "inWorkbook": true,
        "order": 2026080520,
        "summary": "20260805_t20 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94512,
            "after": 0.94512
          },
          "spleen": {
            "before": 0.9785,
            "after": 0.9785
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260805_t20/aorta_axial_0_before.jpg",
                "after": "assets/20260805_t20/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260805_t20/aorta_axial_1_before.jpg",
                "after": "assets/20260805_t20/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260805_t20/aorta_axial_2_before.jpg",
                "after": "assets/20260805_t20/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260805_t20/aorta_coronal_before.jpg",
                "after": "assets/20260805_t20/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260805_t20/spleen_axial_0_before.jpg",
                "after": "assets/20260805_t20/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260805_t20/spleen_axial_1_before.jpg",
                "after": "assets/20260805_t20/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260805_t20/spleen_axial_2_before.jpg",
                "after": "assets/20260805_t20/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260805_t20/spleen_coronal_before.jpg",
                "after": "assets/20260805_t20/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260805_t20/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.2907,
            "centroid": 0.8456
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1958,
            "centroid": 0.1994
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        }
      },
      {
        "id": "20260806_t1",
        "day": "20260806",
        "take": 1,
        "series": "20260806_t1",
        "seriesFull": "USZ_SIEMENS_SOMATOM_Edge_Plus_20260806_S3_Br40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260806_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.884→0.925; Spleen 0.897→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080601,
        "summary": "20260806_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88357,
            "after": 0.92473
          },
          "spleen": {
            "before": 0.89689,
            "after": 0.9614
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 49",
                "before": "assets/20260806_t1/aorta_axial_0_before.jpg",
                "after": "assets/20260806_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 82",
                "before": "assets/20260806_t1/aorta_axial_1_before.jpg",
                "after": "assets/20260806_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 116",
                "before": "assets/20260806_t1/aorta_axial_2_before.jpg",
                "after": "assets/20260806_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/20260806_t1/aorta_coronal_before.jpg",
                "after": "assets/20260806_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 76",
                "before": "assets/20260806_t1/spleen_axial_0_before.jpg",
                "after": "assets/20260806_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 94",
                "before": "assets/20260806_t1/spleen_axial_1_before.jpg",
                "after": "assets/20260806_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 113",
                "before": "assets/20260806_t1/spleen_axial_2_before.jpg",
                "after": "assets/20260806_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 337",
                "before": "assets/20260806_t1/spleen_coronal_before.jpg",
                "after": "assets/20260806_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "gallery": "assets/20260806_t1/gallery.jpg",
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3918,
            "centroid": 0.1044
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3729,
            "centroid": 0.4362
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        }
      }
    ],
    "label": "SEP"
  },
  "pcct": {
    "fixed": "20260805_t1",
    "beforeLabel": "Centroid translation",
    "afterLabel": "Rigid (bone/landmark)",
    "cases": [
      {
        "id": "20260211_t1",
        "day": "20260211",
        "take": 1,
        "series": "20260211_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260211_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260211_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.899→0.926; Spleen 0.872→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026021101,
        "summary": "20260211_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89911,
            "after": 0.92571
          },
          "spleen": {
            "before": 0.87217,
            "after": 0.96085
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260211_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260211_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260211_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260211_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260211_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260211_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260211_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260211_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260211_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260211_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260211_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260211_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260211_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260211_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260211_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260211_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3975,
            "centroid": 0.598
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3838,
            "centroid": 0.4094
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260211_t1/gallery.jpg"
      },
      {
        "id": "20260211_t2",
        "day": "20260211",
        "take": 2,
        "series": "20260211_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260211_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260211_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.882→0.920; Spleen 0.867→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026021102,
        "summary": "20260211_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88152,
            "after": 0.92009
          },
          "spleen": {
            "before": 0.86729,
            "after": 0.96207
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260211_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260211_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260211_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260211_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260211_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260211_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260211_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260211_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260211_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260211_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260211_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260211_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260211_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260211_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260211_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260211_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4258,
            "centroid": 0.2342
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3691,
            "centroid": 0.2201
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260211_t2/gallery.jpg"
      },
      {
        "id": "20260211_t3",
        "day": "20260211",
        "take": 3,
        "series": "20260211_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260211_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260211_t3",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.880→0.929; Spleen 0.865→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026021103,
        "summary": "20260211_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88013,
            "after": 0.92871
          },
          "spleen": {
            "before": 0.86546,
            "after": 0.96231
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260211_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260211_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260211_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260211_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260211_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260211_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260211_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260211_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260211_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260211_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260211_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260211_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260211_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260211_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260211_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260211_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3871,
            "centroid": 0.3814
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3679,
            "centroid": 0.2436
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260211_t3/gallery.jpg"
      },
      {
        "id": "20260227_t1",
        "day": "20260227",
        "take": 1,
        "series": "20260227_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260227_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260227_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.905→0.939; Spleen 0.937→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026022701,
        "summary": "20260227_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90505,
            "after": 0.93894
          },
          "spleen": {
            "before": 0.93699,
            "after": 0.96147
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260227_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260227_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260227_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260227_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260227_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260227_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260227_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260227_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260227_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260227_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260227_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260227_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260227_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260227_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260227_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260227_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.336,
            "centroid": 0.2788
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3777,
            "centroid": 0.213
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260227_t1/gallery.jpg"
      },
      {
        "id": "20260227_t2",
        "day": "20260227",
        "take": 2,
        "series": "20260227_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260227_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260227_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.891→0.942; Spleen 0.933→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026022702,
        "summary": "20260227_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89069,
            "after": 0.94179
          },
          "spleen": {
            "before": 0.93317,
            "after": 0.96034
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260227_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260227_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260227_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260227_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260227_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260227_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260227_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260227_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260227_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260227_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260227_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260227_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260227_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260227_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260227_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260227_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3166,
            "centroid": 0.2
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3876,
            "centroid": 0.2725
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260227_t2/gallery.jpg"
      },
      {
        "id": "20260227_t3",
        "day": "20260227",
        "take": 3,
        "series": "20260227_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260227_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260227_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.908→0.911; Spleen 0.930→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026022703,
        "summary": "20260227_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90762,
            "after": 0.91125
          },
          "spleen": {
            "before": 0.92986,
            "after": 0.959
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260227_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260227_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260227_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260227_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260227_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260227_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260227_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260227_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260227_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260227_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260227_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260227_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260227_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260227_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260227_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260227_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4756,
            "centroid": 0.4598
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4057,
            "centroid": 0.5318
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260227_t3/gallery.jpg"
      },
      {
        "id": "20260304_t1",
        "day": "20260304",
        "take": 1,
        "series": "20260304_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260304_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260304_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.927→0.925; Spleen 0.934→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026030401,
        "summary": "20260304_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92724,
            "after": 0.92475
          },
          "spleen": {
            "before": 0.93417,
            "after": 0.96374
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260304_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260304_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260304_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260304_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260304_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260304_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260304_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260304_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260304_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260304_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260304_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260304_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260304_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260304_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260304_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260304_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3956,
            "centroid": 0.4137
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3539,
            "centroid": 0.1857
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260304_t1/gallery.jpg"
      },
      {
        "id": "20260304_t2",
        "day": "20260304",
        "take": 2,
        "series": "20260304_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260304_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260304_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.928→0.926; Spleen 0.936→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026030402,
        "summary": "20260304_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92843,
            "after": 0.92647
          },
          "spleen": {
            "before": 0.93619,
            "after": 0.96372
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260304_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260304_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260304_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260304_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260304_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260304_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260304_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260304_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260304_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260304_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260304_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260304_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260304_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260304_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260304_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260304_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3885,
            "centroid": 0.3343
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3549,
            "centroid": 0.1618
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260304_t2/gallery.jpg"
      },
      {
        "id": "20260304_t3",
        "day": "20260304",
        "take": 3,
        "series": "20260304_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260304_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260304_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.945→0.932; Spleen 0.939→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026030403,
        "summary": "20260304_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94505,
            "after": 0.932
          },
          "spleen": {
            "before": 0.93875,
            "after": 0.96558
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260304_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260304_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260304_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260304_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260304_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260304_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260304_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260304_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260304_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260304_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260304_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260304_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260304_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260304_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260304_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260304_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3619,
            "centroid": 0.3052
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3356,
            "centroid": 0.2794
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260304_t3/gallery.jpg"
      },
      {
        "id": "20260312_t1",
        "day": "20260312",
        "take": 1,
        "series": "20260312_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260312_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260312_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.919→0.927; Spleen 0.952→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026031201,
        "summary": "20260312_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91897,
            "after": 0.92679
          },
          "spleen": {
            "before": 0.95151,
            "after": 0.96111
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260312_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260312_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260312_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260312_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260312_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260312_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260312_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260312_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260312_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260312_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260312_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260312_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260312_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260312_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260312_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260312_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.384,
            "centroid": 0.3602
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3754,
            "centroid": 0.2673
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260312_t1/gallery.jpg"
      },
      {
        "id": "20260312_t2",
        "day": "20260312",
        "take": 2,
        "series": "20260312_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260312_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260312_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.935→0.933; Spleen 0.953→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026031202,
        "summary": "20260312_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93524,
            "after": 0.93317
          },
          "spleen": {
            "before": 0.95315,
            "after": 0.9607
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260312_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260312_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260312_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260312_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260312_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260312_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260312_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260312_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260312_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260312_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260312_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260312_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260312_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260312_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260312_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260312_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3529,
            "centroid": 0.1824
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3862,
            "centroid": 0.3434
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260312_t2/gallery.jpg"
      },
      {
        "id": "20260312_t3",
        "day": "20260312",
        "take": 3,
        "series": "20260312_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260312_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260312_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.909→0.925; Spleen 0.947→0.968.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026031203,
        "summary": "20260312_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90898,
            "after": 0.92539
          },
          "spleen": {
            "before": 0.94677,
            "after": 0.96825
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260312_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260312_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260312_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260312_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260312_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260312_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260312_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260312_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260312_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260312_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260312_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260312_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260312_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260312_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260312_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260312_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4027,
            "centroid": 0.0768
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2859,
            "centroid": 0.1908
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260312_t3/gallery.jpg"
      },
      {
        "id": "20260327_t1",
        "day": "20260327",
        "take": 1,
        "series": "20260327_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260327_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260327_t1",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.887→0.932; Spleen 0.837→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026032701,
        "summary": "20260327_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88654,
            "after": 0.93228
          },
          "spleen": {
            "before": 0.83698,
            "after": 0.96373
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260327_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260327_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260327_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260327_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260327_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260327_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260327_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260327_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260327_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260327_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260327_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260327_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260327_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260327_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260327_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260327_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3536,
            "centroid": 0.168
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3448,
            "centroid": 0.1167
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260327_t1/gallery.jpg"
      },
      {
        "id": "20260327_t2",
        "day": "20260327",
        "take": 2,
        "series": "20260327_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260327_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260327_t2",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.861→0.928; Spleen 0.826→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026032702,
        "summary": "20260327_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.86148,
            "after": 0.92845
          },
          "spleen": {
            "before": 0.82648,
            "after": 0.96311
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260327_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260327_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260327_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260327_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260327_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260327_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260327_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260327_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260327_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260327_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260327_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260327_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260327_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260327_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260327_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260327_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3695,
            "centroid": 0.3817
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3536,
            "centroid": 0.1493
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260327_t2/gallery.jpg"
      },
      {
        "id": "20260327_t3",
        "day": "20260327",
        "take": 3,
        "series": "20260327_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260327_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260327_t3",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.855→0.929; Spleen 0.825→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026032703,
        "summary": "20260327_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.85477,
            "after": 0.92948
          },
          "spleen": {
            "before": 0.82503,
            "after": 0.96246
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260327_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260327_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260327_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260327_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260327_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260327_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260327_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260327_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260327_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260327_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260327_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260327_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260327_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260327_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260327_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260327_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3645,
            "centroid": 0.316
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3611,
            "centroid": 0.3162
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260327_t3/gallery.jpg"
      },
      {
        "id": "20260402_t1",
        "day": "20260402",
        "take": 1,
        "series": "20260402_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260402_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260402_t1",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.853→0.925; Spleen 0.781→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026040201,
        "summary": "20260402_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.85307,
            "after": 0.92478
          },
          "spleen": {
            "before": 0.7814,
            "after": 0.96372
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260402_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260402_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260402_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260402_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260402_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260402_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260402_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260402_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260402_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260402_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260402_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260402_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260402_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260402_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260402_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260402_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3867,
            "centroid": 0.2529
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3449,
            "centroid": 0.1621
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260402_t1/gallery.jpg"
      },
      {
        "id": "20260402_t2",
        "day": "20260402",
        "take": 2,
        "series": "20260402_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260402_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260402_t2",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.824→0.934; Spleen 0.774→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026040202,
        "summary": "20260402_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.82442,
            "after": 0.93447
          },
          "spleen": {
            "before": 0.77366,
            "after": 0.96318
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260402_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260402_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260402_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260402_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260402_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260402_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260402_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260402_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260402_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260402_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260402_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260402_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260402_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260402_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260402_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260402_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3474,
            "centroid": 0.2066
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3497,
            "centroid": 0.1859
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260402_t2/gallery.jpg"
      },
      {
        "id": "20260402_t3",
        "day": "20260402",
        "take": 3,
        "series": "20260402_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260402_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260402_t3",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.821→0.926; Spleen 0.774→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026040203,
        "summary": "20260402_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.82147,
            "after": 0.92626
          },
          "spleen": {
            "before": 0.77436,
            "after": 0.96346
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260402_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260402_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260402_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260402_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260402_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260402_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260402_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260402_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260402_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260402_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260402_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260402_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260402_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260402_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260402_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260402_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3811,
            "centroid": 0.3273
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.348,
            "centroid": 0.1086
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260402_t3/gallery.jpg"
      },
      {
        "id": "20260410_t1",
        "day": "20260410",
        "take": 1,
        "series": "20260410_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260410_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260410_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.929→0.933; Spleen 0.953→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026041001,
        "summary": "20260410_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92903,
            "after": 0.93318
          },
          "spleen": {
            "before": 0.95345,
            "after": 0.96146
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260410_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260410_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260410_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260410_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260410_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260410_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260410_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260410_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260410_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260410_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260410_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260410_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260410_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260410_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260410_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260410_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3628,
            "centroid": 0.2938
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3764,
            "centroid": 0.1225
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260410_t1/gallery.jpg"
      },
      {
        "id": "20260410_t2",
        "day": "20260410",
        "take": 2,
        "series": "20260410_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260410_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260410_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.919→0.942; Spleen 0.943→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026041002,
        "summary": "20260410_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9193,
            "after": 0.94161
          },
          "spleen": {
            "before": 0.94337,
            "after": 0.96508
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260410_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260410_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260410_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260410_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260410_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260410_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260410_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260410_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260410_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260410_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260410_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260410_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260410_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260410_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260410_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260410_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3166,
            "centroid": 0.3432
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3283,
            "centroid": 0.1553
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260410_t2/gallery.jpg"
      },
      {
        "id": "20260410_t3",
        "day": "20260410",
        "take": 3,
        "series": "20260410_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260410_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260410_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.919→0.924; Spleen 0.952→0.957.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026041003,
        "summary": "20260410_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91868,
            "after": 0.92404
          },
          "spleen": {
            "before": 0.95176,
            "after": 0.95745
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260410_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260410_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260410_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260410_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260410_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260410_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260410_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260410_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260410_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260410_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260410_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260410_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260410_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260410_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260410_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260410_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4055,
            "centroid": 0.2626
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.4043,
            "centroid": 0.233
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260410_t3/gallery.jpg"
      },
      {
        "id": "20260424_t1",
        "day": "20260424",
        "take": 1,
        "series": "20260424_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260424_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260424_t1",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.833→0.928; Spleen 0.824→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026042401,
        "summary": "20260424_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.83281,
            "after": 0.92787
          },
          "spleen": {
            "before": 0.82401,
            "after": 0.96376
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260424_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260424_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260424_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260424_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260424_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260424_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260424_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260424_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260424_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260424_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260424_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260424_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260424_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260424_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260424_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260424_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.369,
            "centroid": 0.1883
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3388,
            "centroid": 0.3863
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260424_t1/gallery.jpg"
      },
      {
        "id": "20260424_t2",
        "day": "20260424",
        "take": 2,
        "series": "20260424_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260424_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260424_t2",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.825→0.930; Spleen 0.807→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026042402,
        "summary": "20260424_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.82493,
            "after": 0.93043
          },
          "spleen": {
            "before": 0.80659,
            "after": 0.96332
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260424_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260424_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260424_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260424_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260424_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260424_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260424_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260424_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260424_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260424_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260424_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260424_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260424_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260424_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260424_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260424_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.357,
            "centroid": 0.1543
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3452,
            "centroid": 0.4682
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260424_t2/gallery.jpg"
      },
      {
        "id": "20260424_t3",
        "day": "20260424",
        "take": 3,
        "series": "20260424_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260424_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260424_t3",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.827→0.931; Spleen 0.803→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026042403,
        "summary": "20260424_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.82714,
            "after": 0.93132
          },
          "spleen": {
            "before": 0.80321,
            "after": 0.96454
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260424_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260424_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260424_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260424_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260424_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260424_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260424_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260424_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260424_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260424_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260424_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260424_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260424_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260424_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260424_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260424_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3522,
            "centroid": 0.1508
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3297,
            "centroid": 0.2983
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260424_t3/gallery.jpg"
      },
      {
        "id": "20260429_t1",
        "day": "20260429",
        "take": 1,
        "series": "20260429_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260429_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260429_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.912→0.929; Spleen 0.931→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026042901,
        "summary": "20260429_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91153,
            "after": 0.92901
          },
          "spleen": {
            "before": 0.93058,
            "after": 0.96652
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260429_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260429_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260429_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260429_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260429_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260429_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260429_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260429_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260429_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260429_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260429_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260429_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260429_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260429_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260429_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260429_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3848,
            "centroid": 0.4569
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3119,
            "centroid": 0.0724
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260429_t1/gallery.jpg"
      },
      {
        "id": "20260429_t2",
        "day": "20260429",
        "take": 2,
        "series": "20260429_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260429_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260429_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.891→0.931; Spleen 0.913→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026042902,
        "summary": "20260429_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89125,
            "after": 0.93064
          },
          "spleen": {
            "before": 0.91321,
            "after": 0.96592
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260429_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260429_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260429_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260429_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260429_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260429_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260429_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260429_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260429_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260429_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260429_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260429_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260429_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260429_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260429_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260429_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3788,
            "centroid": 0.0803
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3164,
            "centroid": 0.1367
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260429_t2/gallery.jpg"
      },
      {
        "id": "20260429_t3",
        "day": "20260429",
        "take": 3,
        "series": "20260429_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260429_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260429_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.910→0.928; Spleen 0.928→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026042903,
        "summary": "20260429_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9103,
            "after": 0.92788
          },
          "spleen": {
            "before": 0.92786,
            "after": 0.96476
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260429_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260429_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260429_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260429_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260429_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260429_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260429_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260429_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260429_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260429_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260429_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260429_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260429_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260429_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260429_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260429_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3898,
            "centroid": 0.4979
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3294,
            "centroid": 0.2991
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260429_t3/gallery.jpg"
      },
      {
        "id": "20260505_t1",
        "day": "20260505",
        "take": 1,
        "series": "20260505_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260505_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260505_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.885→0.929; Spleen 0.899→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026050501,
        "summary": "20260505_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88517,
            "after": 0.92917
          },
          "spleen": {
            "before": 0.89889,
            "after": 0.9613
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260505_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260505_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260505_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260505_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260505_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260505_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260505_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260505_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260505_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260505_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260505_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260505_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260505_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260505_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260505_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260505_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3826,
            "centroid": 0.7987
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3744,
            "centroid": 0.3009
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260505_t1/gallery.jpg"
      },
      {
        "id": "20260505_t2",
        "day": "20260505",
        "take": 2,
        "series": "20260505_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260505_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260505_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.894→0.916; Spleen 0.902→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026050502,
        "summary": "20260505_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89371,
            "after": 0.91579
          },
          "spleen": {
            "before": 0.90174,
            "after": 0.96163
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260505_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260505_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260505_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260505_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260505_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260505_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260505_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260505_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260505_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260505_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260505_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260505_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260505_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260505_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260505_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260505_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4451,
            "centroid": 0.5032
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.377,
            "centroid": 0.3368
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260505_t2/gallery.jpg"
      },
      {
        "id": "20260505_t3",
        "day": "20260505",
        "take": 3,
        "series": "20260505_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260505_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260505_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.913→0.914; Spleen 0.910→0.961.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026050503,
        "summary": "20260505_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91331,
            "after": 0.91438
          },
          "spleen": {
            "before": 0.91016,
            "after": 0.96073
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260505_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260505_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260505_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260505_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260505_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260505_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260505_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260505_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260505_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260505_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260505_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260505_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260505_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260505_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260505_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260505_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4578,
            "centroid": 0.2942
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3805,
            "centroid": 0.3018
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260505_t3/gallery.jpg"
      },
      {
        "id": "20260512_t1",
        "day": "20260512",
        "take": 1,
        "series": "20260512_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260512_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260512_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.899→0.920; Spleen 0.928→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026051201,
        "summary": "20260512_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89853,
            "after": 0.91989
          },
          "spleen": {
            "before": 0.9282,
            "after": 0.9591
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260512_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260512_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260512_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260512_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260512_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260512_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260512_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260512_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260512_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260512_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260512_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260512_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260512_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260512_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260512_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260512_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4291,
            "centroid": 0.2483
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3955,
            "centroid": 0.3015
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260512_t1/gallery.jpg"
      },
      {
        "id": "20260512_t2",
        "day": "20260512",
        "take": 2,
        "series": "20260512_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260512_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260512_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.897→0.923; Spleen 0.923→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026051202,
        "summary": "20260512_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89695,
            "after": 0.92302
          },
          "spleen": {
            "before": 0.92272,
            "after": 0.96461
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260512_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260512_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260512_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260512_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260512_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260512_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260512_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260512_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260512_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260512_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260512_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260512_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260512_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260512_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260512_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260512_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4033,
            "centroid": 0.1875
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3485,
            "centroid": 0.3762
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260512_t2/gallery.jpg"
      },
      {
        "id": "20260512_t3",
        "day": "20260512",
        "take": 3,
        "series": "20260512_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260512_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260512_t3",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.894→0.924; Spleen 0.927→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026051203,
        "summary": "20260512_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89427,
            "after": 0.92428
          },
          "spleen": {
            "before": 0.92664,
            "after": 0.96519
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260512_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260512_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260512_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260512_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260512_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260512_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260512_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260512_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260512_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260512_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260512_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260512_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260512_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260512_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260512_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260512_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.403,
            "centroid": 0.1085
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3362,
            "centroid": 0.0797
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260512_t3/gallery.jpg"
      },
      {
        "id": "20260526_t1",
        "day": "20260526",
        "take": 1,
        "series": "20260526_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260526_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260526_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.888→0.926; Spleen 0.874→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052601,
        "summary": "20260526_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88847,
            "after": 0.92571
          },
          "spleen": {
            "before": 0.87428,
            "after": 0.96544
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260526_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260526_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260526_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260526_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260526_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260526_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260526_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260526_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260526_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260526_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3909,
            "centroid": 0.307
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3286,
            "centroid": 0.1793
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260526_t1/gallery.jpg"
      },
      {
        "id": "20260526_t2",
        "day": "20260526",
        "take": 2,
        "series": "20260526_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260526_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260526_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.881→0.931; Spleen 0.872→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052602,
        "summary": "20260526_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88057,
            "after": 0.9315
          },
          "spleen": {
            "before": 0.87182,
            "after": 0.96363
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260526_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260526_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260526_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260526_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260526_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260526_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260526_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260526_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260526_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260526_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3637,
            "centroid": 0.2684
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3442,
            "centroid": 0.2532
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260526_t2/gallery.jpg"
      },
      {
        "id": "20260526_t3",
        "day": "20260526",
        "take": 3,
        "series": "20260526_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260526_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260526_t3",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.880→0.919; Spleen 0.873→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052603,
        "summary": "20260526_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88019,
            "after": 0.91855
          },
          "spleen": {
            "before": 0.87283,
            "after": 0.96545
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260526_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260526_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260526_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260526_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260526_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260526_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260526_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260526_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260526_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260526_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4243,
            "centroid": 0.3923
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3285,
            "centroid": 0.1814
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260526_t3/gallery.jpg"
      },
      {
        "id": "20260526_t4",
        "day": "20260526",
        "take": 4,
        "series": "20260526_t4",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260526_Q3_Qr40f_120_100_300_1_PolyE_take4",
        "title": "20260526_t4",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.882→0.931; Spleen 0.876→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052604,
        "summary": "20260526_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88213,
            "after": 0.9306
          },
          "spleen": {
            "before": 0.87626,
            "after": 0.96418
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260526_t4/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260526_t4/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260526_t4/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260526_t4/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260526_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260526_t4/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260526_t4/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260526_t4/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260526_t4/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260526_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3624,
            "centroid": 0.3533
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.339,
            "centroid": 0.2262
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260526_t4/gallery.jpg"
      },
      {
        "id": "20260526_t5",
        "day": "20260526",
        "take": 5,
        "series": "20260526_t5",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260526_Q3_Qr40f_120_100_300_1_PolyE_take5",
        "title": "20260526_t5",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.872→0.931; Spleen 0.872→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052605,
        "summary": "20260526_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.87176,
            "after": 0.93056
          },
          "spleen": {
            "before": 0.87244,
            "after": 0.96516
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260526_t5/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260526_t5/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260526_t5/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260526_t5/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260526_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260526_t5/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260526_t5/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260526_t5/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260526_t5/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260526_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.361,
            "centroid": 0.2765
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3306,
            "centroid": 0.1318
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260526_t5/gallery.jpg"
      },
      {
        "id": "20260526_t6",
        "day": "20260526",
        "take": 6,
        "series": "20260526_t6",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260526_Q3_Qr40f_120_100_300_1_PolyE_take6",
        "title": "20260526_t6",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.878→0.933; Spleen 0.874→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026052606,
        "summary": "20260526_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.87834,
            "after": 0.93306
          },
          "spleen": {
            "before": 0.87402,
            "after": 0.96263
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260526_t6/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260526_t6/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260526_t6/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260526_t6/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260526_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260526_t6/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260526_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260526_t6/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260526_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260526_t6/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260526_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260526_t6/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260526_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3484,
            "centroid": 0.1929
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3603,
            "centroid": 0.3606
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260526_t6/gallery.jpg"
      },
      {
        "id": "20260601_t1",
        "day": "20260601",
        "take": 1,
        "series": "20260601_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260601_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260601_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.921→0.900; Spleen 0.913→0.953.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026060101,
        "summary": "20260601_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92056,
            "after": 0.90014
          },
          "spleen": {
            "before": 0.91337,
            "after": 0.95315
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260601_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260601_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260601_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260601_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260601_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260601_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260601_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260601_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260601_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260601_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260601_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260601_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260601_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260601_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260601_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260601_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.6482,
            "assd": 0.5509,
            "centroid": 0.3378
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.4806,
            "centroid": 1.1089
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260601_t1/gallery.jpg"
      },
      {
        "id": "20260601_t2",
        "day": "20260601",
        "take": 2,
        "series": "20260601_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260601_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260601_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.916→0.936; Spleen 0.920→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026060102,
        "summary": "20260601_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9163,
            "after": 0.93639
          },
          "spleen": {
            "before": 0.92025,
            "after": 0.96726
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260601_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260601_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260601_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260601_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260601_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260601_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260601_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260601_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260601_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260601_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260601_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260601_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260601_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260601_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260601_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260601_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3429,
            "centroid": 0.3208
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3049,
            "centroid": 0.0981
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260601_t2/gallery.jpg"
      },
      {
        "id": "20260601_t3",
        "day": "20260601",
        "take": 3,
        "series": "20260601_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260601_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260601_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.917→0.930; Spleen 0.919→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026060103,
        "summary": "20260601_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91729,
            "after": 0.93046
          },
          "spleen": {
            "before": 0.91944,
            "after": 0.9649
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260601_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260601_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260601_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260601_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260601_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260601_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260601_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260601_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260601_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260601_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260601_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260601_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260601_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260601_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260601_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260601_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3721,
            "centroid": 0.4346
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3279,
            "centroid": 0.1218
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260601_t3/gallery.jpg"
      },
      {
        "id": "20260611_t1",
        "day": "20260611",
        "take": 1,
        "series": "20260611_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260611_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260611_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.919→0.934; Spleen 0.930→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061101,
        "summary": "20260611_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91871,
            "after": 0.93435
          },
          "spleen": {
            "before": 0.93015,
            "after": 0.96652
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260611_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260611_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260611_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260611_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260611_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260611_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260611_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260611_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260611_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260611_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260611_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260611_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260611_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260611_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260611_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260611_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3643,
            "centroid": 0.1798
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3062,
            "centroid": 0.0778
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260611_t1/gallery.jpg"
      },
      {
        "id": "20260611_t2",
        "day": "20260611",
        "take": 2,
        "series": "20260611_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260611_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260611_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.927→0.932; Spleen 0.934→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061102,
        "summary": "20260611_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92692,
            "after": 0.93169
          },
          "spleen": {
            "before": 0.93382,
            "after": 0.96434
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260611_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260611_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260611_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260611_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260611_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260611_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260611_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260611_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260611_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260611_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260611_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260611_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260611_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260611_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260611_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260611_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3643,
            "centroid": 0.1152
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3534,
            "centroid": 0.1815
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260611_t2/gallery.jpg"
      },
      {
        "id": "20260611_t3",
        "day": "20260611",
        "take": 3,
        "series": "20260611_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260611_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260611_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.907→0.921; Spleen 0.930→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061103,
        "summary": "20260611_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90741,
            "after": 0.92086
          },
          "spleen": {
            "before": 0.93013,
            "after": 0.9623
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260611_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260611_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260611_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260611_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260611_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260611_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260611_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260611_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260611_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260611_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260611_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260611_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260611_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260611_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260611_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260611_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4148,
            "centroid": 0.3395
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3717,
            "centroid": 0.4336
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260611_t3/gallery.jpg"
      },
      {
        "id": "20260617_t1",
        "day": "20260617",
        "take": 1,
        "series": "20260617_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260617_Q3_Qr40f_100_100_300_1_PolyE_take1_recon1mm",
        "title": "20260617_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.914→0.930; Spleen 0.935→0.969.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061701,
        "summary": "20260617_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91392,
            "after": 0.92993
          },
          "spleen": {
            "before": 0.93497,
            "after": 0.96938
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260617_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260617_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260617_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260617_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260617_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260617_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260617_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260617_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260617_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260617_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260617_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260617_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260617_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260617_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260617_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260617_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3829,
            "centroid": 0.3189
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2698,
            "centroid": 0.1675
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260617_t1/gallery.jpg"
      },
      {
        "id": "20260617_t2",
        "day": "20260617",
        "take": 2,
        "series": "20260617_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260617_Q3_Qr40f_120_100_300_1_PolyE_take1_recon1mm",
        "title": "20260617_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.932→0.937; Spleen 0.952→0.970.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061702,
        "summary": "20260617_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93235,
            "after": 0.93704
          },
          "spleen": {
            "before": 0.95209,
            "after": 0.97026
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260617_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260617_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260617_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260617_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260617_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260617_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260617_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260617_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260617_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260617_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260617_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260617_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260617_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260617_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260617_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260617_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3476,
            "centroid": 0.3317
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2619,
            "centroid": 0.2083
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260617_t2/gallery.jpg"
      },
      {
        "id": "20260617_t3",
        "day": "20260617",
        "take": 3,
        "series": "20260617_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260617_Q3_Qr40f_80_100_300_1_PolyE_take1_recon1mm",
        "title": "20260617_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.934→0.932; Spleen 0.957→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026061703,
        "summary": "20260617_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93401,
            "after": 0.93161
          },
          "spleen": {
            "before": 0.95655,
            "after": 0.96604
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260617_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260617_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260617_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260617_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260617_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260617_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260617_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260617_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260617_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260617_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260617_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260617_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260617_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260617_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260617_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260617_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3745,
            "centroid": 0.3315
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2996,
            "centroid": 0.283
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260617_t3/gallery.jpg"
      },
      {
        "id": "20260622_t1",
        "day": "20260622",
        "take": 1,
        "series": "20260622_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260622_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260622_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.913→0.932; Spleen 0.943→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062201,
        "summary": "20260622_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9129,
            "after": 0.93213
          },
          "spleen": {
            "before": 0.94335,
            "after": 0.96527
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260622_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260622_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260622_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260622_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260622_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260622_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260622_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260622_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260622_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260622_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3647,
            "centroid": 0.2881
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3264,
            "centroid": 0.1431
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260622_t1/gallery.jpg"
      },
      {
        "id": "20260622_t2",
        "day": "20260622",
        "take": 2,
        "series": "20260622_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260622_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260622_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.917→0.926; Spleen 0.935→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062202,
        "summary": "20260622_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91653,
            "after": 0.92597
          },
          "spleen": {
            "before": 0.9348,
            "after": 0.96153
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260622_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260622_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260622_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260622_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260622_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260622_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260622_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260622_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260622_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260622_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.401,
            "centroid": 0.3056
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3642,
            "centroid": 0.1658
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260622_t2/gallery.jpg"
      },
      {
        "id": "20260622_t3",
        "day": "20260622",
        "take": 3,
        "series": "20260622_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260622_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260622_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.921→0.916; Spleen 0.928→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062203,
        "summary": "20260622_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92057,
            "after": 0.91619
          },
          "spleen": {
            "before": 0.92804,
            "after": 0.95984
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260622_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260622_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260622_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260622_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260622_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260622_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260622_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260622_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260622_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260622_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4544,
            "centroid": 0.1791
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.3962,
            "centroid": 0.6608
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260622_t3/gallery.jpg"
      },
      {
        "id": "20260622_t4",
        "day": "20260622",
        "take": 4,
        "series": "20260622_t4",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260622_Q3_Qr40f_120_100_300_1_PolyE_take4",
        "title": "20260622_t4",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.932→0.934; Spleen 0.945→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062204,
        "summary": "20260622_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9316,
            "after": 0.93354
          },
          "spleen": {
            "before": 0.945,
            "after": 0.96741
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260622_t4/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260622_t4/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260622_t4/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260622_t4/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260622_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260622_t4/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260622_t4/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260622_t4/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260622_t4/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260622_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3617,
            "centroid": 0.1917
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3204,
            "centroid": 0.1033
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260622_t4/gallery.jpg"
      },
      {
        "id": "20260622_t5",
        "day": "20260622",
        "take": 5,
        "series": "20260622_t5",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260622_Q3_Qr40f_120_100_300_1_PolyE_take5",
        "title": "20260622_t5",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.910→0.926; Spleen 0.929→0.959.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062205,
        "summary": "20260622_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90967,
            "after": 0.92638
          },
          "spleen": {
            "before": 0.92897,
            "after": 0.95935
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260622_t5/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260622_t5/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260622_t5/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260622_t5/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260622_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260622_t5/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260622_t5/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260622_t5/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260622_t5/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260622_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3874,
            "centroid": 0.2135
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3933,
            "centroid": 0.2789
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260622_t5/gallery.jpg"
      },
      {
        "id": "20260622_t6",
        "day": "20260622",
        "take": 6,
        "series": "20260622_t6",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260622_Q3_Qr40f_120_100_300_1_PolyE_take6",
        "title": "20260622_t6",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.913→0.932; Spleen 0.943→0.969.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062206,
        "summary": "20260622_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91313,
            "after": 0.93197
          },
          "spleen": {
            "before": 0.94259,
            "after": 0.96929
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260622_t6/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260622_t6/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260622_t6/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260622_t6/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260622_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260622_t6/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260622_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260622_t6/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260622_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260622_t6/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260622_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260622_t6/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260622_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3666,
            "centroid": 0.2397
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3057,
            "centroid": 0.3194
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260622_t6/gallery.jpg"
      },
      {
        "id": "20260629_t1",
        "day": "20260629",
        "take": 1,
        "series": "20260629_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260629_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260629_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.909→0.932; Spleen 0.943→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062901,
        "summary": "20260629_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.90906,
            "after": 0.93247
          },
          "spleen": {
            "before": 0.94289,
            "after": 0.96571
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260629_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260629_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260629_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260629_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260629_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260629_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260629_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260629_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260629_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260629_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260629_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260629_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260629_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260629_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260629_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260629_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3563,
            "centroid": 0.7494
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3239,
            "centroid": 0.369
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260629_t1/gallery.jpg"
      },
      {
        "id": "20260629_t2",
        "day": "20260629",
        "take": 2,
        "series": "20260629_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260629_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260629_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.930→0.943; Spleen 0.959→0.970.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062902,
        "summary": "20260629_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93008,
            "after": 0.94308
          },
          "spleen": {
            "before": 0.95882,
            "after": 0.97009
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260629_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260629_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260629_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260629_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260629_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260629_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260629_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260629_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260629_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260629_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260629_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260629_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260629_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260629_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260629_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260629_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3087,
            "centroid": 0.5476
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2828,
            "centroid": 0.4281
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260629_t2/gallery.jpg"
      },
      {
        "id": "20260629_t3",
        "day": "20260629",
        "take": 3,
        "series": "20260629_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260629_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260629_t3",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.714→0.953; Spleen 0.877→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026062903,
        "summary": "20260629_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.71431,
            "after": 0.95264
          },
          "spleen": {
            "before": 0.87668,
            "after": 0.96567
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260629_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260629_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260629_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260629_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260629_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260629_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260629_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260629_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260629_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260629_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260629_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260629_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260629_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260629_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260629_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260629_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.2652,
            "centroid": 0.6856
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3285,
            "centroid": 0.6778
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260629_t3/gallery.jpg"
      },
      {
        "id": "20260707_t1",
        "day": "20260707",
        "take": 1,
        "series": "20260707_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260707_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260707_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.900→0.928; Spleen 0.919→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026070701,
        "summary": "20260707_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89994,
            "after": 0.92816
          },
          "spleen": {
            "before": 0.91923,
            "after": 0.96454
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260707_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260707_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260707_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260707_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260707_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260707_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260707_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260707_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260707_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260707_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260707_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260707_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260707_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260707_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260707_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260707_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3737,
            "centroid": 0.3718
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3277,
            "centroid": 0.1184
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260707_t1/gallery.jpg"
      },
      {
        "id": "20260707_t2",
        "day": "20260707",
        "take": 2,
        "series": "20260707_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260707_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260707_t2",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.538→0.928; Spleen 0.834→0.917.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026070702,
        "summary": "20260707_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.53771,
            "after": 0.92811
          },
          "spleen": {
            "before": 0.83434,
            "after": 0.91667
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260707_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260707_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260707_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260707_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260707_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260707_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260707_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260707_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260707_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260707_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260707_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260707_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260707_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260707_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260707_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260707_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3752,
            "centroid": 0.2251
          },
          "spleen": {
            "hd95": 4.6875,
            "assd": 0.8437,
            "centroid": 3.4724
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260707_t2/gallery.jpg"
      },
      {
        "id": "20260707_t3",
        "day": "20260707",
        "take": 3,
        "series": "20260707_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260707_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260707_t3",
        "fixed": "20260805_t1",
        "tone": "amber",
        "tag": "QC flag",
        "note": "QC: Spleen after Dice 0.898 < 0.90. Kayıt yine de gösteriliyor.",
        "featured": false,
        "qc": true,
        "qcReason": "Spleen after Dice 0.898 < 0.90",
        "inWorkbook": true,
        "order": 2026070703,
        "summary": "20260707_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.52409,
            "after": 0.9241
          },
          "spleen": {
            "before": 0.8259,
            "after": 0.89828
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260707_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260707_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260707_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260707_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260707_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260707_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260707_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260707_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260707_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260707_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260707_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260707_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260707_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260707_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260707_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260707_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3936,
            "centroid": 0.3539
          },
          "spleen": {
            "hd95": 6.3555,
            "assd": 1.0601,
            "centroid": 4.9862
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260707_t3/gallery.jpg"
      },
      {
        "id": "20260714_t1",
        "day": "20260714",
        "take": 1,
        "series": "20260714_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260714_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260714_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.920→0.936; Spleen 0.946→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026071401,
        "summary": "20260714_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91996,
            "after": 0.93574
          },
          "spleen": {
            "before": 0.94582,
            "after": 0.96326
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260714_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260714_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260714_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260714_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260714_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260714_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260714_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260714_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260714_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260714_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260714_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260714_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260714_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260714_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260714_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260714_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3375,
            "centroid": 0.11
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3539,
            "centroid": 0.1273
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260714_t1/gallery.jpg"
      },
      {
        "id": "20260714_t2",
        "day": "20260714",
        "take": 2,
        "series": "20260714_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260714_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260714_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.917→0.928; Spleen 0.944→0.958.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026071402,
        "summary": "20260714_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91733,
            "after": 0.92804
          },
          "spleen": {
            "before": 0.94404,
            "after": 0.95776
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260714_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260714_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260714_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260714_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260714_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260714_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260714_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260714_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260714_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260714_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260714_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260714_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260714_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260714_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260714_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260714_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3761,
            "centroid": 0.3671
          },
          "spleen": {
            "hd95": 1.1719,
            "assd": 0.4044,
            "centroid": 0.525
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260714_t2/gallery.jpg"
      },
      {
        "id": "20260714_t3",
        "day": "20260714",
        "take": 3,
        "series": "20260714_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260714_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260714_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.920→0.934; Spleen 0.946→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026071403,
        "summary": "20260714_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91992,
            "after": 0.93369
          },
          "spleen": {
            "before": 0.94561,
            "after": 0.96397
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260714_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260714_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260714_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260714_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260714_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260714_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260714_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260714_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260714_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260714_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260714_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260714_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260714_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260714_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260714_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260714_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3477,
            "centroid": 0.1785
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3425,
            "centroid": 0.1692
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260714_t3/gallery.jpg"
      },
      {
        "id": "20260730_t1",
        "day": "20260730",
        "take": 1,
        "series": "20260730_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260730_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260730_t1",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.891→0.931; Spleen 0.887→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073001,
        "summary": "20260730_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89128,
            "after": 0.93058
          },
          "spleen": {
            "before": 0.88729,
            "after": 0.9647
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260730_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260730_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260730_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260730_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260730_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260730_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260730_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260730_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260730_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260730_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3681,
            "centroid": 0.1674
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3325,
            "centroid": 0.1076
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260730_t1/gallery.jpg"
      },
      {
        "id": "20260730_t2",
        "day": "20260730",
        "take": 2,
        "series": "20260730_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260730_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260730_t2",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.893→0.933; Spleen 0.883→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073002,
        "summary": "20260730_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.89283,
            "after": 0.93271
          },
          "spleen": {
            "before": 0.88256,
            "after": 0.96678
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260730_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260730_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260730_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260730_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260730_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260730_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260730_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260730_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260730_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260730_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3539,
            "centroid": 0.0652
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3145,
            "centroid": 0.2053
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260730_t2/gallery.jpg"
      },
      {
        "id": "20260730_t3",
        "day": "20260730",
        "take": 3,
        "series": "20260730_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260730_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260730_t3",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.886→0.933; Spleen 0.886→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073003,
        "summary": "20260730_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88566,
            "after": 0.93297
          },
          "spleen": {
            "before": 0.88632,
            "after": 0.96574
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260730_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260730_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260730_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260730_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260730_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260730_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260730_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260730_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260730_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260730_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3536,
            "centroid": 0.1292
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3242,
            "centroid": 0.1401
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260730_t3/gallery.jpg"
      },
      {
        "id": "20260730_t4",
        "day": "20260730",
        "take": 4,
        "series": "20260730_t4",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260730_Q3_Qr40f_120_100_300_1_PolyE_take4",
        "title": "20260730_t4",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.890→0.930; Spleen 0.897→0.964.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073004,
        "summary": "20260730_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.8901,
            "after": 0.92985
          },
          "spleen": {
            "before": 0.8968,
            "after": 0.96359
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260730_t4/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260730_t4/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260730_t4/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260730_t4/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260730_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260730_t4/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260730_t4/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260730_t4/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260730_t4/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260730_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3774,
            "centroid": 0.61
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3467,
            "centroid": 0.0779
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260730_t4/gallery.jpg"
      },
      {
        "id": "20260730_t5",
        "day": "20260730",
        "take": 5,
        "series": "20260730_t5",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260730_Q3_Qr40f_120_100_300_1_PolyE_take5",
        "title": "20260730_t5",
        "fixed": "20260805_t1",
        "tone": "mint",
        "tag": "Take",
        "note": "Aorta 0.647→0.933; Spleen 0.834→0.962.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073005,
        "summary": "20260730_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.64699,
            "after": 0.93319
          },
          "spleen": {
            "before": 0.83437,
            "after": 0.96232
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260730_t5/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260730_t5/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260730_t5/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260730_t5/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260730_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260730_t5/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260730_t5/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260730_t5/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260730_t5/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260730_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3607,
            "centroid": 0.2136
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3591,
            "centroid": 0.2294
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260730_t5/gallery.jpg"
      },
      {
        "id": "20260730_t6",
        "day": "20260730",
        "take": 6,
        "series": "20260730_t6",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260730_Q3_Qr40f_120_100_300_1_PolyE_take6",
        "title": "20260730_t6",
        "fixed": "20260805_t1",
        "tone": "sky",
        "tag": "Take",
        "note": "Aorta 0.881→0.932; Spleen 0.896→0.965.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073006,
        "summary": "20260730_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.88139,
            "after": 0.93237
          },
          "spleen": {
            "before": 0.89605,
            "after": 0.96454
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260730_t6/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260730_t6/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260730_t6/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260730_t6/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260730_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260730_t6/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260730_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260730_t6/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260730_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260730_t6/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260730_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260730_t6/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260730_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3661,
            "centroid": 0.3598
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3385,
            "centroid": 0.1715
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260730_t6/gallery.jpg"
      },
      {
        "id": "20260731_t1",
        "day": "20260731",
        "take": 1,
        "series": "20260731_t1",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take1",
        "title": "20260731_t1",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.943→0.931; Spleen 0.967→0.963.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073101,
        "summary": "20260731_t1 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94283,
            "after": 0.93124
          },
          "spleen": {
            "before": 0.96654,
            "after": 0.96263
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t1/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t1/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t1/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t1/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t1/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t1/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t1/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t1/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t1/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t1/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t1/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t1/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t1/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t1/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t1/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t1/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3742,
            "centroid": 0.4733
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.3688,
            "centroid": 0.6288
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t1/gallery.jpg"
      },
      {
        "id": "20260731_t2",
        "day": "20260731",
        "take": 2,
        "series": "20260731_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260731_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.918→0.927; Spleen 0.958→0.967.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073102,
        "summary": "20260731_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91802,
            "after": 0.92652
          },
          "spleen": {
            "before": 0.95848,
            "after": 0.96685
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3895,
            "centroid": 0.2855
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2946,
            "centroid": 0.3303
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t2/gallery.jpg"
      },
      {
        "id": "20260731_t3",
        "day": "20260731",
        "take": 3,
        "series": "20260731_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260731_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.933→0.915; Spleen 0.957→0.957.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073103,
        "summary": "20260731_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93335,
            "after": 0.9148
          },
          "spleen": {
            "before": 0.95653,
            "after": 0.95722
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4476,
            "centroid": 0.3258
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4162,
            "centroid": 0.5161
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t3/gallery.jpg"
      },
      {
        "id": "20260731_t4",
        "day": "20260731",
        "take": 4,
        "series": "20260731_t4",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take4",
        "title": "20260731_t4",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.915→0.915; Spleen 0.957→0.956.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073104,
        "summary": "20260731_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.91478,
            "after": 0.91512
          },
          "spleen": {
            "before": 0.95724,
            "after": 0.95585
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t4/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t4/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t4/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t4/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t4/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t4/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t4/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t4/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.4478,
            "centroid": 0.3635
          },
          "spleen": {
            "hd95": 1.159,
            "assd": 0.4307,
            "centroid": 0.5735
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t4/gallery.jpg"
      },
      {
        "id": "20260731_t5",
        "day": "20260731",
        "take": 5,
        "series": "20260731_t5",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take5",
        "title": "20260731_t5",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.952→0.937; Spleen 0.965→0.960.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073105,
        "summary": "20260731_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.95174,
            "after": 0.93721
          },
          "spleen": {
            "before": 0.96507,
            "after": 0.96018
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t5/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t5/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t5/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t5/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t5/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t5/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t5/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t5/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3411,
            "centroid": 0.1838
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3835,
            "centroid": 0.2176
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t5/gallery.jpg"
      },
      {
        "id": "20260731_t6",
        "day": "20260731",
        "take": 6,
        "series": "20260731_t6",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take6",
        "title": "20260731_t6",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.956→0.956; Spleen 0.978→0.973.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073106,
        "summary": "20260731_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.95645,
            "after": 0.95645
          },
          "spleen": {
            "before": 0.97836,
            "after": 0.97257
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t6/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t6/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t6/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t6/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t6/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t6/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t6/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t6/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.2329,
            "centroid": 0.2569
          },
          "spleen": {
            "hd95": 0.8286,
            "assd": 0.2449,
            "centroid": 0.3314
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t6/gallery.jpg"
      },
      {
        "id": "20260731_t7",
        "day": "20260731",
        "take": 7,
        "series": "20260731_t7",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take7",
        "title": "20260731_t7",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.932→0.926; Spleen 0.963→0.968.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073107,
        "summary": "20260731_t7 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9324,
            "after": 0.92622
          },
          "spleen": {
            "before": 0.96262,
            "after": 0.96814
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t7/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t7/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t7/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t7/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t7/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t7/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t7/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t7/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t7/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t7/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t7/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t7/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t7/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t7/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t7/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t7/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.3997,
            "centroid": 0.6369
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3344,
            "centroid": 0.5507
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t7/gallery.jpg"
      },
      {
        "id": "20260731_t8",
        "day": "20260731",
        "take": 8,
        "series": "20260731_t8",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take8",
        "title": "20260731_t8",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.925→0.942; Spleen 0.964→0.977.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073108,
        "summary": "20260731_t8 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.92453,
            "after": 0.94173
          },
          "spleen": {
            "before": 0.96404,
            "after": 0.97746
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t8/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t8/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t8/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t8/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t8/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t8/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t8/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t8/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t8/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t8/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t8/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t8/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t8/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t8/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t8/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t8/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3096,
            "centroid": 0.2555
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2069,
            "centroid": 0.2609
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t8/gallery.jpg"
      },
      {
        "id": "20260731_t9",
        "day": "20260731",
        "take": 9,
        "series": "20260731_t9",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take9",
        "title": "20260731_t9",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.937→0.937; Spleen 0.966→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073109,
        "summary": "20260731_t9 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93688,
            "after": 0.93688
          },
          "spleen": {
            "before": 0.96563,
            "after": 0.96563
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t9/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t9/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t9/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t9/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t9/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t9/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t9/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t9/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t9/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t9/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t9/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t9/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t9/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t9/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t9/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t9/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3404,
            "centroid": 0.5402
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3406,
            "centroid": 0.4517
          }
        },
        "registration": {
          "method": "landmark_rigid_fallback",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t9/gallery.jpg"
      },
      {
        "id": "20260731_t10",
        "day": "20260731",
        "take": 10,
        "series": "20260731_t10",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260731_Q3_Qr40f_120_100_300_1_PolyE_take10",
        "title": "20260731_t10",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.944→0.940; Spleen 0.970→0.969.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026073110,
        "summary": "20260731_t10 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94387,
            "after": 0.94028
          },
          "spleen": {
            "before": 0.97031,
            "after": 0.96905
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260731_t10/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t10/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260731_t10/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t10/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260731_t10/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t10/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260731_t10/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260731_t10/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260731_t10/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260731_t10/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260731_t10/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260731_t10/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260731_t10/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260731_t10/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260731_t10/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260731_t10/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.1719,
            "assd": 0.3121,
            "centroid": 0.296
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.277,
            "centroid": 0.2409
          }
        },
        "registration": {
          "method": "landmark_rigid_vertebrae",
          "attempted": true,
          "accepted": true
        },
        "gallery": "assets/pcct/20260731_t10/gallery.jpg"
      },
      {
        "id": "20260805_t2",
        "day": "20260805",
        "take": 2,
        "series": "20260805_t2",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take2",
        "title": "20260805_t2",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.939→0.969; Spleen 0.966→0.976.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080502,
        "summary": "20260805_t2 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93893,
            "after": 0.96919
          },
          "spleen": {
            "before": 0.96625,
            "after": 0.97601
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t2/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t2/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t2/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t2/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t2/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t2/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t2/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t2/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t2/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t2/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t2/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t2/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t2/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t2/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t2/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t2/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1911,
            "centroid": 0.3604
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2601,
            "centroid": 0.2905
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t2/gallery.jpg"
      },
      {
        "id": "20260805_t3",
        "day": "20260805",
        "take": 3,
        "series": "20260805_t3",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take3",
        "title": "20260805_t3",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.969→0.969; Spleen 0.975→0.975.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080503,
        "summary": "20260805_t3 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.96927,
            "after": 0.96927
          },
          "spleen": {
            "before": 0.97537,
            "after": 0.97537
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t3/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t3/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t3/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t3/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t3/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t3/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t3/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t3/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t3/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t3/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t3/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t3/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t3/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t3/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t3/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t3/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1862,
            "centroid": 0.4197
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2678,
            "centroid": 0.3084
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t3/gallery.jpg"
      },
      {
        "id": "20260805_t4",
        "day": "20260805",
        "take": 4,
        "series": "20260805_t4",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take4",
        "title": "20260805_t4",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.974→0.974; Spleen 0.979→0.979.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080504,
        "summary": "20260805_t4 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.97357,
            "after": 0.97357
          },
          "spleen": {
            "before": 0.97928,
            "after": 0.97928
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t4/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t4/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t4/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t4/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t4/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t4/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t4/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t4/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t4/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t4/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t4/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t4/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t4/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t4/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t4/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t4/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1608,
            "centroid": 0.4751
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.2278,
            "centroid": 0.3323
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t4/gallery.jpg"
      },
      {
        "id": "20260805_t5",
        "day": "20260805",
        "take": 5,
        "series": "20260805_t5",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take5",
        "title": "20260805_t5",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.942→0.971; Spleen 0.966→0.973.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080505,
        "summary": "20260805_t5 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.94154,
            "after": 0.97113
          },
          "spleen": {
            "before": 0.96601,
            "after": 0.97259
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t5/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t5/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t5/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t5/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t5/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t5/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t5/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t5/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t5/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t5/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t5/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t5/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t5/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t5/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t5/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t5/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1754,
            "centroid": 0.2837
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.296,
            "centroid": 0.3262
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t5/gallery.jpg"
      },
      {
        "id": "20260805_t6",
        "day": "20260805",
        "take": 6,
        "series": "20260805_t6",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take6",
        "title": "20260805_t6",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.946→0.946; Spleen 0.976→0.976.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080506,
        "summary": "20260805_t6 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.9459,
            "after": 0.9459
          },
          "spleen": {
            "before": 0.97592,
            "after": 0.97592
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t6/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t6/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t6/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t6/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t6/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t6/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t6/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t6/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t6/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t6/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t6/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t6/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t6/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t6/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t6/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t6/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.2809,
            "centroid": 0.2878
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.2092,
            "centroid": 0.275
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t6/gallery.jpg"
      },
      {
        "id": "20260805_t7",
        "day": "20260805",
        "take": 7,
        "series": "20260805_t7",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take7",
        "title": "20260805_t7",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.974→0.974; Spleen 0.986→0.986.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080507,
        "summary": "20260805_t7 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.97397,
            "after": 0.97397
          },
          "spleen": {
            "before": 0.9857,
            "after": 0.9857
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t7/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t7/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t7/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t7/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t7/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t7/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t7/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t7/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t7/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t7/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t7/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t7/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t7/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t7/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t7/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t7/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1486,
            "centroid": 0.4333
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1417,
            "centroid": 0.4726
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t7/gallery.jpg"
      },
      {
        "id": "20260805_t8",
        "day": "20260805",
        "take": 8,
        "series": "20260805_t8",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take8",
        "title": "20260805_t8",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.978→0.949; Spleen 0.992→0.977.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080508,
        "summary": "20260805_t8 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.97821,
            "after": 0.9487
          },
          "spleen": {
            "before": 0.99157,
            "after": 0.97677
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t8/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t8/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t8/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t8/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t8/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t8/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t8/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t8/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t8/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t8/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t8/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t8/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t8/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t8/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t8/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t8/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 0.5859,
            "assd": 0.2663,
            "centroid": 0.3463
          },
          "spleen": {
            "hd95": 0.5859,
            "assd": 0.2004,
            "centroid": 0.3864
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t8/gallery.jpg"
      },
      {
        "id": "20260805_t9",
        "day": "20260805",
        "take": 9,
        "series": "20260805_t9",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take9",
        "title": "20260805_t9",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.937→0.937; Spleen 0.966→0.966.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080509,
        "summary": "20260805_t9 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.93738,
            "after": 0.93738
          },
          "spleen": {
            "before": 0.9661,
            "after": 0.9661
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t9/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t9/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t9/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t9/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t9/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t9/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t9/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t9/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t9/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t9/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t9/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t9/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t9/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t9/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t9/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t9/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.159,
            "assd": 0.3368,
            "centroid": 0.6516
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.3334,
            "centroid": 0.3329
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t9/gallery.jpg"
      },
      {
        "id": "20260805_t10",
        "day": "20260805",
        "take": 10,
        "series": "20260805_t10",
        "seriesFull": "USZ_Siemens_Healthineers_NAEOTOM_Alpha_20260805_Q3_Qr40f_120_100_300_1_PolyE_take10",
        "title": "20260805_t10",
        "fixed": "20260805_t1",
        "tone": "violet",
        "tag": "Take",
        "note": "Aorta 0.978→0.978; Spleen 0.986→0.986.",
        "featured": false,
        "qc": false,
        "qcReason": null,
        "inWorkbook": true,
        "order": 2026080510,
        "summary": "20260805_t10 → 20260805_t1",
        "method": "Centroid translation → Rigid (bone/landmark)",
        "scores": {
          "aorta": {
            "before": 0.97829,
            "after": 0.97829
          },
          "spleen": {
            "before": 0.9861,
            "after": 0.9861
          }
        },
        "views": {
          "aorta": {
            "axial": [
              {
                "label": "z 37",
                "before": "assets/pcct/20260805_t10/aorta_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t10/aorta_axial_0_after.jpg"
              },
              {
                "label": "z 70",
                "before": "assets/pcct/20260805_t10/aorta_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t10/aorta_axial_1_after.jpg"
              },
              {
                "label": "z 103",
                "before": "assets/pcct/20260805_t10/aorta_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t10/aorta_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 293",
                "before": "assets/pcct/20260805_t10/aorta_coronal_before.jpg",
                "after": "assets/pcct/20260805_t10/aorta_coronal_after.jpg"
              }
            ]
          },
          "spleen": {
            "axial": [
              {
                "label": "z 64",
                "before": "assets/pcct/20260805_t10/spleen_axial_0_before.jpg",
                "after": "assets/pcct/20260805_t10/spleen_axial_0_after.jpg"
              },
              {
                "label": "z 83",
                "before": "assets/pcct/20260805_t10/spleen_axial_1_before.jpg",
                "after": "assets/pcct/20260805_t10/spleen_axial_1_after.jpg"
              },
              {
                "label": "z 102",
                "before": "assets/pcct/20260805_t10/spleen_axial_2_before.jpg",
                "after": "assets/pcct/20260805_t10/spleen_axial_2_after.jpg"
              }
            ],
            "coronal": [
              {
                "label": "y 334",
                "before": "assets/pcct/20260805_t10/spleen_coronal_before.jpg",
                "after": "assets/pcct/20260805_t10/spleen_coronal_after.jpg"
              }
            ]
          }
        },
        "residual": {
          "aorta": {
            "hd95": 1.0,
            "assd": 0.1272,
            "centroid": 0.2576
          },
          "spleen": {
            "hd95": 1.0,
            "assd": 0.1351,
            "centroid": 0.3255
          }
        },
        "registration": {
          "method": "identity",
          "attempted": false,
          "accepted": false
        },
        "gallery": "assets/pcct/20260805_t10/gallery.jpg"
      }
    ],
    "label": "PCCT"
  }
};
window.CASES = window.DATASETS[(new URLSearchParams(location.search).get("dataset") === "pcct") ? "pcct" : "sep"];
