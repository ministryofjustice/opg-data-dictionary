# OPG Data Dictionary

OPG Data Dictionary: Managed by opg-org-infra &amp; Terraform

This is a prototype of a data dictionary website for the Office of the Public Guardian (OPG).

Aim is to provide a clear map of what data is in which systems, its formats and flag data flows within the organisation.

## Data source

A regular scheduled job updates `src/_data/sirius_tables` with the latest data from Sirius, using the "data-dictionary-json" artifact that it generates.

Additional metadata—summary, stability, whether it's exported to Analytical Platform—can be provided by updating `sirius.json`. Refdata can be added by creating a "${table}_refdata.json" file matching the table name in the `src/_data` directory.

## Getting started

For a full build run:

```docker compose up builder```

To serve locally

```docker compose up server```

The site will run on http://localhost:8089
