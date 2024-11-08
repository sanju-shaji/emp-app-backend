const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

// GET all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.render('employeedata', { employees });
    } catch (error) {
        res.status(500).send(error);
    }
});

// POST a new employee
router.post('/employees', async (req, res) => {
    const newEmployee = new Employee(req.body);
    try {
        await newEmployee.save();
        res.redirect('/employees');
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET employee update form
router.get('/employees/update/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.render('update', { employee });
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT update employee
router.post('/employees/update/:id', async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/employees');
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE an employee
router.post('/employees/delete/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect('/employees');
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
