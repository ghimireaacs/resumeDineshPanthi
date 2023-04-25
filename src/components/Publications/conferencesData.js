export function conferenceData() {
  const conferences = [
    { id: 1, Title: " Nagarkot Workshop", Description: "" },
    { id: 2, Title: " ANMA Pokhara Conference 2019", Description: "" },
    { id: 3, Title: "NCMA Conference Butwal ", Description: "" },
    { id: 4, Title: " Turkey Conference 2018", Description: "" },
    {
      id: 5,
      Title: "19Th International Pure Mathematics Conference",
      Description:
        "Presented a paper entitled On Some Fixed Point Results in Dislocated Metric Space as a Keynote speaker in the 19Th International Pure Mathematics Conference during 19-21 August at Islamabad Pakistan organized by Pakistan Mathematical Society.",
    },
    {
      id: 6,
      Title: "7th International Science Conference",
      Description:
        "Presented a paper as an invited speaker entitled Some Common Fixed Point Theorems for Two Pairs of Maps in Dislocated Metric Space oranized by Kathmandu University in collaboration with World Science Congress during 10-11, November 2017 at Dhulikhel, Nepal.",
    },
    {
      id: 7,
      Title: "The Asian Mathematical Conference (AMC -2016)",
      Description:
        "Presented a paper entitled Some Meir- Keeler Type Common Fixed Point Theorems in Dislocated Metric Space in The Asian Mathematical Conference (AMC -2016) organized by Indonesian Mathematical Society in collaboration with South East Asian Mathematical Society in Bali Nausa Dua, Indonesia, during July 25 -29, 2016 .",
    },
    {
      id: 8,
      Title: "7th National conference on Science and Technology-2016",
      Description:
        "VerPresented a paper entitledSome fixed point theorems in dislocated metric space in 7th National conference on Science and Technology, organized by Nepal Academy of Science and Technology (NAST) during 29 - 31 March 2016y short description of the project.",
    },
    {
      id: 9,
      Title:
        "International conference on Applications of Mathematics to Nonlinear Sciences(AMNS -2016) ",
      Description:
        " Presented a paper entitled Some fixed point theorems of Integral and Meir- keeler type in dislocated metric space in International conference on Applications of Mathematics to Nonlinear Sciences(AMNS -2016) organized jointly by Nepal Mathematical Society, The Association of Nepalese Mathematicians in America, Central Department of Mathematics, Kirtipur, T.U. and Department of Natural Sciences, K. U. during 26 - 29 May 2016.",
    },
    {
      id: 10,
      Title: "International conference in function spaces and inequalities",
      Description:
        "Presented a paper entitled Meir - Keeler type common fixed point theorems in dislocated metric space in International conference in function spaces and inequalities, organized by South Asian University, New Delhi, India, during 08 - 12 December, 2015",
    },
    {
      id: 11,
      Title: "16th World Sanskrit Conference -2015",
      Description:
        "Presented a paper entitled Mathematical relationship in Buddisth Yoga in 16th World Sanskrit Conference -2015, organized by Sanskrit Studies Centre, Silpakorn University, Bangkok, Thailand during 28 June - 2 July, 2015.",
    },
    {
      id: 12,
      Title: "14th International Pure Mathematics Conference 2013",
      Description:
        "Presented a paper entitled Common Fixed Point Theorems for Single and Two Pairs of Weakly Compatible Mappings in Dislocated Metric Space on 14th International Pure Mathematics Conference 2013 organized by Pakistan Mathematical Society, Preston University and Quaid-i-Azam University Islamabad Pakistan from August 23 - 25, 2013.",
    },
    {
      id: 13,
      Title: "6th World Conference on 21st Century Mathematics 2013",
      Description:
        "Presented a paper entitled A common Fixed Point Theorem for four mappings in Dislocated metric Space on 6th World Conference on 21st 4Century Mathematics 2013 organized by Abdus Salam School of Mathematical Sciences, GC University Lahore, Pakistan from March 6- 9, 2013.",
    },
    {
      id: 14,
      Title: "The Sixth National Conference on Science and Technology -2012",
      Description:
        "Presented a paper entitled A Fixed Point Theorem for Weakly Compatible Mappings in Dislocated Metric Space on The Sixth National Conference on Science and Technology organized by Nepal Academy of Science and Technology (NAST) Nepal, from September 25 - 27, 2012.",
    },
    {
      id: 15,
      Title:
        "International Conference on Analysis and its Applications (ICAA-2011)",
      Description:
        "Presented a paper entitled A Common Fixed Point Theorem for Four Mappings in Dislocated Metric Space in an International Conference on Analysis and its Applications (ICAA-2011) organized by Department of Mathematics, Aligarh Muslim University, Aligarh, India from November 19- 21, 2011.",
    },
    {
      id: 16,
      Title: "The Fifth National Conference on Science and Technology-2008",
      Description:
        "Presented a Paper entitled Developments of Fixed Point Theorem under Meir -Keeler Type Contractive Condition on The Fifth National Conference on Science and Technology organized by Nepal Academy of Science and Technology (NAST) Nepal from November 10 - 12, 2008.",
    },
    {
      id: 17,
      Title: "The Fifth National Conference on Science and Technology -2008",
      Description:
        "Presented a Paper entitled Review on Mathematics Teaching for Applied Courses in Nepal on The Fifth National Conference on Science and Technology organized by Nepal Academy of Science and Technology (NAST) Nepal,from November 10 - 12, 2008",
    },
    {
      id: 18,
      Title:
        "International Conference on the Teaching of Mathematical Modeling and Applications (ICTMA-2007)",
      Description:
        "Presented a Paper entitled Teaching Applicable Mathematics in the Universities of Nepal on International Conference on the Teaching of Mathematical Modeling and Applications (ICTMA-2007) organized by Kathmandu University Dhulikhel, Nepal from June 25 - 29, 2007",
    },
    {
      id: 19,
      Title: " Fifth National Conference of Mathematics(NCM 2014)",
      Description:
        "Presented a paper entitled On Development of Fixed Point Theorems of Dislocated Quasi Metric Space in Fifth National Conference of Mathematics(NCM 2014) held at Birendra Nagar, Surket, from January 28-30, 2014.",
    },
    {
      id: 20,
      Title: "National Conference of Mathematics (NCM - 2010)",
      Description:
        "Presented a paper entitled Meir-Keeler type contractive condition and its developments on the National Conference of Mathematics (NCM - 2010) organized by Nepal Mathematical Society held at Biratnagar, Nepal from January 17-19, 2010.",
    },
    {
      id: 21,
      Title:
        "CIMPA-UNESCO-NEPAL RESEARCH SCHOOL ON NUMBER THEORY IN CRYPTOGRAPHY AND ITS APPLICATIONS ",
      Description:
        "Participated in the CIMPA-UNESCO-NEPAL RESEARCH SCHOOL ON NUMBER THEORY IN CRYPTOGRAPHY AND ITS APPLICATIONS organized by Kathmandu University Nepal from July 19 - 31, 2010.",
    },
    {
      id: 22,
      Title: "ADVANCE TRAINING PROGRAMME IN FUNCTIONAL ANALYSIS-2009 ",
      Description:
        "Participated in the ADVANCE TRAINING PROGRAMME IN FUNCTIONAL ANALYSIS-2009 organized by DST-centre for interdisciplinary Mathematical Sciences, Banaras Hindu University, Varanasi,India from June 21-July3, 2010.",
    },
    {
      id: 23,
      Title: "CIMPA SCHOOL ON COMMUTATIVE ALGEBRA-MUMBAI",
      Description:
        "Participated in the CIMPA SCHOOL ON COMMUTATIVE ALGEBRA-MUMBAI organized by CIMPA and Department of Mathematics, Indian Institute of Technology, Mumbai, India from January 2 - 6, 2008.",
    },
    {
      id: 24,
      Title: "INTERNATIONAL CONFERENCE ON COMMUTATIVE ALGEBRA-MUMBAI ",
      Description:
        "Participated in the INTERNATIONAL CONFERENCE ON COMMUTATIVE ALGEBRA-MUMBAI organized by CIMPA and Department of Mathematics, Indian Institute of Technology, Mumbai, India from January 8 - 11, 2008.",
    },
    {
      id: 25,
      Title: "THIRD SOUTH ASIAN UNIVERSITIES YOUTH FESTIVAL (SAUFEST 2008)",
      Description:
        "Participated in THIRD SOUTH ASIAN UNIVERSITIES YOUTH FESTIVAL (SAUFEST 2008) organized by Kathmandu University in collaboration with Association of Indian Universities (AIU) held at Kathmandu University from February 07 - 11, 2008.",
    },
    {
      id: 26,
      Title:
        "INTERNATIONAL CONFERENCE ON THE TEACHING OF MATHEMATICAL MODELING AND APPLICATIONS (ICTMA - 2007)",
      Description:
        "Participated in INTERNATIONAL CONFERENCE ON THE TEACHING OF MATHEMATICAL MODELING AND APPLICATIONS (ICTMA - 2007) organized by Kathmandu University Dhulikhel, Nepal from June 25 - 29,",
    },
    {
      id: 27,
      Title:
        "A Seminar on Recent Developments in Mathematics and Its Applications",
      Description:
        "Delivered a talk on the topicRecent developments of fixed point results in d-metric space in the A Seminar on Recent Developments in mathematics and Its Applications organized by Central Department of Mathematics, Institute of Science and Technology, Tribhuvan University during 21-22 September, 2015.",
    },
    {
      id: 28,
      Title:
        "Summer School-2012 on Mathematical Modeling and Scientific Computing with Differential Equations",
      Description:
        "Participated in Summer School-2012 on Mathematical Modeling and Scientific Computing with Differential Equations jointly organized by Kathmandu University and Technical University of Kaiserslautern, Germany at Kathmandu University, Dhulikhel, Nepal from September 24-28, 2012.",
    },
    {
      id: 29,
      Title: "National Conference of Mathematics (NCM-2012)",
      Description:
        "Presented a paper entitled Dislocated Metric Space and Fixed point Theorems on National Conference of Mathematics (NCM-2012) organized by Nepal Mathematical Society held at MahedraNagar, Kanchanpur, Nepal from January 20-22, 2012.",
    },
    {
      id: 30,
      Title: "National School on Number theory and Cryptography (NSTC-2009)",
      Description:
        "Participated in the National School on Number theory and Cryptography (NSTC-2009) organized by Kathmandu University, Nepal from December 26, 2009 - Jan 05, 2010.",
    },
    {
      id: 31,
      Title:
        "A Two Day Seminar on Teaching Methods, Materials and Evaluation Techniques in Mathematics",
      Description:
        "Attended A Two Day Seminar on Teaching Methods, Materials and Evaluation Techniques in Mathematics organized by Central Department of Mathematics, Tribhuwan University, Nepal and Nepal Mathematical Society from September 21- 22, 2007.",
    },
    {
      id: 32,
      Title:
        "National Conference on Mathematical Sciences and Its Application ",
      Description:
        "Attended the National Conference on Mathematical Sciences and Its Application organized by Kathmandu University and Nepal Mathematical Society from January 15 - 16, 2006.",
    },
    {
      id: 33,
      Title:
        " Numerics for Differential Equations in the field of Industrial Mathematics",
      Description:
        "Attended the 3-credit course on Numerics for Differential Equations in the field of Industrial Mathematics being taught by Dr. Nicole Marheineke, a visiting professor from Department of Mathematics, Technical University of Kaiserslautern, Germany at Kathmandu University, Dhulikhel, Nepal.",
    },
    {
      id: 34,
      Title: "Workshop on Algebra and Analysis",
      Description:
        "Participated in the 15 days Workshop on Algebra and Analysis organized by T.U. and UGC, Nepal held at the Central Department of Mathematics, Kirtipur from May 28 to June 1, 2003",
    },
    {
      id: 35,
      Title: "A Seminar On Effective Mathematics Teaching",
      Description:
        "Participated in the seminar of Effective Mathematics Teaching organized by Orient Longman Publication, India held at Saint Mary\u2019s School, Lalitpur, Nepal from May 24 - 25,1991.",
    },
    {
      id: 36,
      Title: "Instructional Workhop on Applied Mathematics",
      Description:
        "Presnted a paper entitled On Developments of Fixed point Theorems of Dislocated metric Space on Instructional Workshop on Applied Mathematics held at Department of Mathematics, Kathmandu University, Dhulikhel Nepal from February 20-26, 2014.",
    },
    {
      id: 37,
      Title: "7th International Science Conference",
      Description:
        "Presented a paper as an invited speaker entitled Some Common Fixed Point Theorems for Two Pairs of Maps in Dislocated Metric Space oranized by Kathmandu University in collaboration with World Science Congress during 10-11, November 2017 at Dhulikhel, Nepal.",
    },
    {
      id: 38,
      Title: "The Asian Mathematical Conference (AMC -2016)",
      Description:
        "Presented a paper entitled Some Meir- Keeler Type Common Fixed Point Theorems in Dislocated Metric Space in The Asian Mathematical Conference (AMC -2016) organized by Indonesian Mathematical Society in collaboration with South East Asian Mathematical Society in Bali Nausa Dua, Indonesia, during July 25 -29, 2016 .",
    },
    {
      id: 39,
      Title:
        "International conference on Applications of Mathematics to Nonlinear Sciences(AMNS -2016) ",
      Description:
        " Presented a paper entitled Some fixed point theorems of Integral and Meir- keeler type in dislocated metric space in International conference on Applications of Mathematics to Nonlinear Sciences(AMNS -2016) organized jointly by Nepal Mathematical Society, The Association of Nepalese Mathematicians in America, Central Department of Mathematics, Kirtipur, T.U. and Department of Natural Sciences, K. U. during 26 - 29 May 2016.",
    },
    {
      id: 40,
      Title: "7th National conference on Science and Technology-2016",
      Description:
        "VerPresented a paper entitledSome fixed point theorems in dislocated metric space in 7th National conference on Science and Technology, organized by Nepal Academy of Science and Technology (NAST) during 29 - 31 March 2016y short description of the project.",
    },
    {
      id: 41,
      Title: "International conference in function spaces and inequalities",
      Description:
        "Presented a paper entitled Meir - Keeler type common fixed point theorems in dislocated metric space in International conference in function spaces and inequalities, organized by South Asian University, New Delhi, India, during 08 - 12 December, 2015",
    },
    {
      id: 42,
      Title: "16th World Sanskrit Conference -2015",
      Description:
        "Presented a paper entitled Mathematical relationship in Buddisth Yoga in 16th World Sanskrit Conference -2015, organized by Sanskrit Studies Centre, Silpakorn University, Bangkok, Thailand during 28 June - 2 July, 2015.",
    },
    {
      id: 43,
      Title: "14th International Pure Mathematics Conference 2013",
      Description:
        "Presented a paper entitled Common Fixed Point Theorems for Single and Two Pairs of Weakly Compatible Mappings in Dislocated Metric Space on 14th International Pure Mathematics Conference 2013 organized by Pakistan Mathematical Society, Preston University and Quaid-i-Azam University Islamabad Pakistan from August 23 - 25, 2013.",
    },
    {
      id: 44,
      Title: "6th World Conference on 21st Century Mathematics 2013",
      Description:
        "Presented a paper entitled A common Fixed Point Theorem for four mappings in Dislocated metric Space on 6th World Conference on 21st 4Century Mathematics 2013 organized by Abdus Salam School of Mathematical Sciences, GC University Lahore, Pakistan from March 6- 9, 2013.",
    },
    {
      id: 45,
      Title: "The Sixth National Conference on Science and Technology -2012",
      Description:
        "Presented a paper entitled A Fixed Point Theorem for Weakly Compatible Mappings in Dislocated Metric Space on The Sixth National Conference on Science and Technology organized by Nepal Academy of Science and Technology (NAST) Nepal, from September 25 - 27, 2012.",
    },
    {
      id: 46,
      Title:
        "International Conference on Analysis and its Applications (ICAA-2011)",
      Description:
        "Presented a paper entitled A Common Fixed Point Theorem for Four Mappings in Dislocated Metric Space in an International Conference on Analysis and its Applications (ICAA-2011) organized by Department of Mathematics, Aligarh Muslim University, Aligarh, India from November 19- 21, 2011.",
    },
    {
      id: 47,
      Title: "The Fifth National Conference on Science and Technology-2008",
      Description:
        "Presented a Paper entitled Developments of Fixed Point Theorem under Meir -Keeler Type Contractive Condition on The Fifth National Conference on Science and Technology organized by Nepal Academy of Science and Technology (NAST) Nepal from November 10 - 12, 2008.",
    },
    {
      id: 48,
      Title: "The Fifth National Conference on Science and Technology -2008",
      Description:
        "Presented a Paper entitled Review on Mathematics Teaching for Applied Courses in Nepal on The Fifth National Conference on Science and Technology organized by Nepal Academy of Science and Technology (NAST) Nepal,from November 10 - 12, 2008",
    },
    {
      id: 49,
      Title:
        "International Conference on the Teaching of Mathematical Modeling and Applications (ICTMA-2007)",
      Description:
        "Presented a Paper entitled Teaching Applicable Mathematics in the Universities of Nepal on International Conference on the Teaching of Mathematical Modeling and Applications (ICTMA-2007) organized by Kathmandu University Dhulikhel, Nepal from June 25 - 29, 2007",
    },
    {
      id: 50,
      Title: " Fifth National Conference of Mathematics(NCM 2014)",
      Description:
        "Presented a paper entitled On Development of Fixed Point Theorems of Dislocated Quasi Metric Space in Fifth National Conference of Mathematics(NCM 2014) held at Birendra Nagar, Surket, from January 28-30, 2014.",
    },
    {
      id: 51,
      Title: "National Conference of Mathematics (NCM - 2010)",
      Description:
        "Presented a paper entitled Meir-Keeler type contractive condition and its developments on the National Conference of Mathematics (NCM - 2010) organized by Nepal Mathematical Society held at Biratnagar, Nepal from January 17-19, 2010.",
    },
    {
      id: 52,
      Title:
        "CIMPA-UNESCO-NEPAL RESEARCH SCHOOL ON NUMBER THEORY IN CRYPTOGRAPHY AND ITS APPLICATIONS ",
      Description:
        "Participated in the CIMPA-UNESCO-NEPAL RESEARCH SCHOOL ON NUMBER THEORY IN CRYPTOGRAPHY AND ITS APPLICATIONS organized by Kathmandu University Nepal from July 19 - 31, 2010.",
    },
    {
      id: 53,
      Title: "ADVANCE TRAINING PROGRAMME IN FUNCTIONAL ANALYSIS-2009 ",
      Description:
        "Participated in the ADVANCE TRAINING PROGRAMME IN FUNCTIONAL ANALYSIS-2009 organized by DST-centre for interdisciplinary Mathematical Sciences, Banaras Hindu University, Varanasi,India from June 21-July3, 2010.",
    },
    {
      id: 54,
      Title: "CIMPA SCHOOL ON COMMUTATIVE ALGEBRA-MUMBAI",
      Description:
        "Participated in the CIMPA SCHOOL ON COMMUTATIVE ALGEBRA-MUMBAI organized by CIMPA and Department of Mathematics, Indian Institute of Technology, Mumbai, India from January 2 - 6, 2008.",
    },
    {
      id: 55,
      Title: "INTERNATIONAL CONFERENCE ON COMMUTATIVE ALGEBRA-MUMBAI ",
      Description:
        "Participated in the INTERNATIONAL CONFERENCE ON COMMUTATIVE ALGEBRA-MUMBAI organized by CIMPA and Department of Mathematics, Indian Institute of Technology, Mumbai, India from January 8 - 11, 2008.",
    },
    {
      id: 56,
      Title: "THIRD SOUTH ASIAN UNIVERSITIES YOUTH FESTIVAL (SAUFEST 2008)",
      Description:
        "Participated in THIRD SOUTH ASIAN UNIVERSITIES YOUTH FESTIVAL (SAUFEST 2008) organized by Kathmandu University in collaboration with Association of Indian Universities (AIU) held at Kathmandu University from February 07 - 11, 2008.",
    },
    {
      id: 57,
      Title:
        "INTERNATIONAL CONFERENCE ON THE TEACHING OF MATHEMATICAL MODELING AND APPLICATIONS (ICTMA - 2007)",
      Description:
        "Participated in INTERNATIONAL CONFERENCE ON THE TEACHING OF MATHEMATICAL MODELING AND APPLICATIONS (ICTMA - 2007) organized by Kathmandu University Dhulikhel, Nepal from June 25 - 29,",
    },
    {
      id: 58,
      Title:
        "A Seminar on Recent Developments in Mathematics and Its Applications",
      Description:
        "Delivered a talk on the topicRecent developments of fixed point results in d-metric space in the A Seminar on Recent Developments in mathematics and Its Applications organized by Central Department of Mathematics, Institute of Science and Technology, Tribhuvan University during 21-22 September, 2015.",
    },
    {
      id: 59,
      Title:
        "Summer School-2012 on Mathematical Modeling and Scientific Computing with Differential Equations",
      Description:
        "Participated in Summer School-2012 on Mathematical Modeling and Scientific Computing with Differential Equations jointly organized by Kathmandu University and Technical University of Kaiserslautern, Germany at Kathmandu University, Dhulikhel, Nepal from September 24-28, 2012.",
    },
    {
      id: 60,
      Title: "National Conference of Mathematics (NCM-2012)",
      Description:
        "Presented a paper entitled Dislocated Metric Space and Fixed point Theorems on National Conference of Mathematics (NCM-2012) organized by Nepal Mathematical Society held at MahedraNagar, Kanchanpur, Nepal from January 20-22, 2012.",
    },
    {
      id: 61,
      Title: "National School on Number theory and Cryptography (NSTC-2009)",
      Description:
        "Participated in the National School on Number theory and Cryptography (NSTC-2009) organized by Kathmandu University, Nepal from December 26, 2009 - Jan 05, 2010.",
    },
    {
      id: 62,
      Title:
        "A Two Day Seminar on Teaching Methods, Materials and Evaluation Techniques in Mathematics",
      Description:
        "Attended A Two Day Seminar on Teaching Methods, Materials and Evaluation Techniques in Mathematics organized by Central Department of Mathematics, Tribhuwan University, Nepal and Nepal Mathematical Society from September 21- 22, 2007.",
    },
    {
      id: 63,
      Title:
        "National Conference on Mathematical Sciences and Its Application ",
      Description:
        "Attended the National Conference on Mathematical Sciences and Its Application organized by Kathmandu University and Nepal Mathematical Society from January 15 - 16, 2006.",
    },
    {
      id: 64,
      Title:
        " Numerics for Differential Equations in the field of Industrial Mathematics",
      Description:
        "Attended the 3-credit course on Numerics for Differential Equations in the field of Industrial Mathematics being taught by Dr. Nicole Marheineke, a visiting professor from Department of Mathematics, Technical University of Kaiserslautern, Germany at Kathmandu University, Dhulikhel, Nepal.",
    },
    {
      id: 65,
      Title: "Workshop on Algebra and Analysis",
      Description:
        "Participated in the 15 days Workshop on Algebra and Analysis organized by T.U. and UGC, Nepal held at the Central Department of Mathematics, Kirtipur from May 28 to June 1, 2003",
    },
    {
      id: 66,
      Title: "A Seminar On Effective Mathematics Teaching",
      Description:
        "Participated in the seminar of Effective Mathematics Teaching organized by Orient Longman Publication, India held at Saint Mary\u2019s School, Lalitpur, Nepal from May 24 - 25,1991.",
    },
    {
      id: 67,
      Title: "Instructional Workhop on Applied Mathematics",
      Description:
        "Presnted a paper entitled On Developments of Fixed point Theorems of Dislocated metric Space on Instructional Workshop on Applied Mathematics held at Department of Mathematics, Kathmandu University, Dhulikhel Nepal from February 20-26, 2014.",
    },
    {
      id: 68,
      Title: "The Asian Mathematical Conference (AMS -2016)",
      Description:
        "Chaired a session of oral presentations in The Asian Mathematical Conference (AMS -2016) organized by Indonesian Mathematical Society in collaboration with South East Asian Mathematical Society in Bali, Nusa Dua, Indonesia, during July 25 -29, 2016.",
    },
    {
      id: 69,
      Title: "14th International Pure Mathematics Conference 2013, Pakistan",
      Description:
        "Chaired a session of 14th International Pure Mathematics Conference 2013 organized by Pakistan Mathematical Society, Preston University and Quaid-i-Azam University Islamabad Pakistan from August 23 - 25, 2013.",
    },
    {
      id: 70,
      Title:
        "International conference on Applications of Mathematics to Nonlinear Sciences (AMNS -2016)",
      Description:
        "Chaired a session of International conference on Applications of Mathematics to Nonlinear Sciences(AMNS -2016) organized jointly by Nepal Mathematical Society, The Association of Nepalese Mathematicians in America, Central Department of Mathematics, Kirtipur, T.U. and Department of Natural Sciences, K. U. during 26 - 29 May 2016 in Kathmandu, Nepal.",
    },
  ];
  return conferences;
}
