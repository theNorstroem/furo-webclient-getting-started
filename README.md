# FURO Web Client Getting Started // Ui5 Integration

branch: feature/ui5-integration

FURO is a modular open source web stack based on web standard technologies. FURO is not a framework, but rather an assemblage of various standard technologies. 

- https://furo.pro/
- https://github.com/theNorstroem/FuroBaseComponents

## General information
The Getting-Started Repository is a step-by-step guide to FURO. The individual steps are divided into branches.

Branches:
- main
- feature/basic-setup
- feature/ui5-integration
- feature/sap-fiori-floorplan-one

## How to run
1. Install the NPM module(s)
```bash
npm install
```
2. Run the application
```bash
npm run start
```

## Step 2 - Integration of the UI5 Webcomponents Library
In this branch we have replaced the standard HTML button with the ui5 button and placed it in a card.
> https://sap.github.io/ui5-webcomponents/

By the way, FURO offers SAP's web component library (UI5) in the @furo/ui5 package.

## Step 3 - Integration of the SAP Fiori Floorplans
In this branch we have implemented a simple SAP Fiori dynamic page.
> https://experience.sap.com/fiori-design-web/floorplan-overview/
