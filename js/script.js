// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // this function does area and perimeter

  // input
  const length = parseInt(document.getElementById("length-of-rectangle").value)
  const width = parseInt(document.getElementById("width-of-rectangle").value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById("area").innerHTML =
    "Area is: " + length + " x " + width + " = " + area + " or " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: 2 x (" + length + " + " + width + ") = " + perimeter + " or " + perimeter + " cm"
}
