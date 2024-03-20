import { Collapse, Flex, Typography } from 'antd';
import Title from "antd/es/typography/Title";
import Card from 'antd/es/card/Card';
import type { CollapseProps } from 'antd';
const schema = require("../assets/images/MongoDB-Schema.png");
const { Text } = Typography;

const MongoDB = () => {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: <Text strong>1. Explore the data and formulate considerations about a hosting database</Text>,
            children: <>
                <Title level={5}>Hosting database:</Title>
                The considerations for a hosting database would focus on scalability, given the global scope of the data, and flexibility, to accommodate various data types and relationships.
                <br />
                <br />
                We've explored the dataset and identified the key collection:
                <Title level={5}>Collection:</Title>
                <ul>
                    <li>Cities:</li>
                    <ul>
                        <li>Cities:</li>
                        <li>Countries</li>
                        <li>Emission Targets</li>
                        <li>Reductions</li>
                    </ul>
                </ul>
            </>
        },
        {
            key: '2',
            label: <Text strong>2. Design and develop proper database structure of the requested type</Text>,
            children: <>
                The finale database structure illustrated with a json snippet:
                <br />
                <br />
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='json'>
                            {`{
  "_id": {
    "$oid": "65facf66c6ef86ec7e1e8b7f"
  },
  "city": "Brasília",
  "country": "Brazil",
  "c40": false,
  "climateRiskAssessments": [
    {
      "yearOfPublication": 2021,
      "factorsConsidered": "Assessment considers nature; 
      Assessment considers water security; Assessment includes a high-emissions scenario (i.e., RCP 8.5)",
      "primaryAuthors": "Consultant; Relevant department within jurisdiction",
      "adaptationGoals": "Adaptation plan",
      "population": 2817068,
      "populationYear": 2022,
      "lastUpdate": "02/07/2024 04:14:16 AM"
    }
  ],
  "location": {
    "city": "(-15.794229, -47.882166)",
    "country": "(-14.235004, -51.92528)"
  },
  "reports": [
    {
      "reportingYear": 2017,
      "baselineYear": 2005,
      "baselineEmissions": 5648140,
      "percentageReductionTarget": 40,
      "targetDate": 2020,
      "totalEmissions": 7739830
    }
  ]
}
`}

                        </code>
                    </pre>
                </Card>
            </>
        },
        {
            key: '3',
            label: <Text strong>3. Ingest the data into the database, include pre-processing of it, if necessary</Text>,
            children: <>
                We pre-processed the datasets and ingested the data into our new structured database with MongoDB.
                See the repo: <a href="https://github.com/Pejomi/dbAssignment2">https://github.com/Pejomi/dbAssignment2</a>
            </>
        },
        {
            key: '4',
            label: <Text strong>4. Design and develop operations for maintenance of the database</Text>,
            children: <>
                The following operations have been developed for maintaining the database:
                <ul>
                    <li>Regular data validation and cleanup. Removing duplicate or orphaned records.</li>
                    <li>Database backups and recovery plans. Utilizing cron jobs for backing up.</li>
                    <li>Performance monitoring and tuning. Identifying missing indexes.</li>
                    <li>Security audits and updates. Regularly reviewing user permissions, and applying DBMS updates.</li>
                    <li>Documentation and change management. Implementing a database versioning tool like Flyway, and maintaining documentation.</li>
                </ul>
            </>
        },
        {
            key: '5',
            label: <Text strong>5. Formulate ten relevant questions for extracting information from the database, design and develop database functionality for implementing the information extraction (for the relevance consult the instructor)</Text>,
            children: <>
                <ol>
                    <li>What are the top 5 cities with the highest total emissions reported in a specific year?</li>
                    <li>Which cities have set the highest percentage reduction targets for their emissions by 2030?</li>
                    <li>How do C40 cities compare to non-C40 cities in terms of average total emissions reported?</li>
                    <li>What is the progress of a specific city towards its emissions reduction target compared to its baseline emissions?</li>
                    <li>Which countries have the most cities reporting emissions data?</li>
                    <li>What is the average emissions reduction target set by cities with a baseline year before 2010?</li>
                    <li>How many cities have already met or exceeded their emissions reduction targets?</li>
                    <li>What is the trend of total emissions reported by cities over the last 5 years?</li>
                    <li>Which cities have increased their emissions from the baseline year despite having reduction targets?</li>
                    <li>Are there regional differences in emissions reduction targets?</li>
                </ol>
            </>
        },
        {
            key: '6',
            label: <Text strong>6. Design and implement a model for scaling the database, considering ACID and/or CAP theorem rules</Text>,
            children: <>
                For scaling, a schema that can handle both structured and semi-structured data is ideal. NoSQL databases e.g. MongoDB offer flexibility and scalability, suitable for varied data types and volumes.
                <br />
                <br />
                Data can be partitioned based on geographical regions, like country, or reporting years to distribute the load evenly across servers, enhancing query performance as the database grows.

            </>
        },
        {
            key: '7',
            label: <Text strong>7. Validate and test all database operations</Text>,
            children: <>
                The following aspects have been validated and tested:
                <ul>
                    <li>Inserting new documents to ensure that the data structure conforms to our schema.</li>
                    <li>Updating documents to ensure updates correctly modify existing documents and that additions do not create duplicates.</li>
                    <li>Retrieving documents based on different criteria, by country, city, or reportingYear, to ensure the queries return the expected documents.</li>
                    <li>Deleting documents or fields within documents to ensure that data is correctly removed without unintended side effects.</li>
                </ul>
            </>
        },
        {
            key: '8',
            label: <Text strong>8. Evaluate the database’s performance and suggest measures for improving it</Text>,
            children: <>
                We considered the following measures for improving the database in the future:
                <ul>
                    <li>Partitioning and Sharding</li>
                    <li>Optimize Query Statements</li>
                    <li>Caching Frequently Accessed Data</li>
                    <li>Scale Horizontally</li>
                    <li>Use SSDs</li>
                    <li>In-memory Databases</li>
                </ul>
            </>
        },
        {
            key: '9',
            label: <Text strong>9. Document your work, describing the product and the process. Apply graphical notation (diagrams), when it is possible</Text>,
            children: <>
                We made a ER-diagram to present our work with structuring the new database using Hackolade:
                <br />
                <br />
                <Flex gap="middle" align="start" vertical>
                    <Flex style={{ width: "100%" }} justify={'center'} align={'flex-start'}>
                        <div style={{ width: "100%", maxWidth: 600 }}>
                            <img src={schema} alt="ER-diagram" style={{ width: "100%" }} />
                        </div>
                    </Flex>
                </Flex>
            </>
        },
        {
            key: '10',
            label: <Text strong>10. Formulate conclusions and recommendations</Text>,
            children: <>
                We spent too much time on preprocessing the data, because it was not compatible to be ingested into the database. We tried some different strategies for handling the logic. We started with Java, but quickly realized that Python was more suitable for handling the CSV files etc.
                <br />
                <br />
                We used some time to understand how we should construct the data for this assignment. The data structures in MongoDB are very different compared to the relational databases.
                <br />
                <br />
                We see some advantages of using MongoDB. For example it is much easier to request a larger amount of data at once compared to relational databases where you often need to have several requests to different tables to get your actual wanted information.
            </>
        },
    ];
    return (
        <>
            <Flex gap="middle" align="start" vertical>
                <Flex style={{ width: "100%" }} justify={'center'} align={'flex-start'}>
                    <div style={{ padding: "50px 125px 100px 125px", width: "100%", maxWidth: 1000 }}>
                        <Title>MongoDB</Title>
                        <br />
                        <Collapse accordion defaultActiveKey={['1']} items={items} />
                    </div>
                </Flex>
            </Flex>
        </>
    )
}

export default MongoDB;