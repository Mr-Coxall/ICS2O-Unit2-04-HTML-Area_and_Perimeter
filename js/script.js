// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This script does basic math

"use strict"

function addAgeClicked () {
  let length
  let width
  let area
  let perimeter

  // input
  length = parseInt(document.getElementById("length-of-rectangle").value)
  width = parseInt(document.getElementById("width-of-rectangle").value)

  // process
  area = length * width
  perimeter = 2 * (length + width)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + length + ' x ' + width + ' = ' + area + ' or ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: 2 x (' + length + ' + ' + width + ') = ' + perimeter + ' or ' + perimeter + ' cm'
}
