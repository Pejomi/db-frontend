import { Collapse, Flex, Typography } from 'antd';
import Title from "antd/es/typography/Title";
import Card from 'antd/es/card/Card';
import type { CollapseProps } from 'antd';
const graphs = require("../assets/images/graphs.png");
const { Text } = Typography;

const Neo4j = () => {
    const items: CollapseProps['items'] = [
        {
            key: '0',
            label: <Text strong>Data Ingestion</Text>,
            children: <>
                We have inserted data from our four csv files (see data folder: <a href="https://github.com/Pejomi/jupyter-notebook/tree/main/DB/Data">https://github.com/Pejomi/jupyter-notebook/tree/main/DB/Data</a>
                ) into one graph by
                the following cypher queries:
                <br />
                <br />
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`LOAD CSV WITH HEADERS FROM 'file:///countries.csv' AS row
CREATE (:Country {name: row.Country, location: row['Country
Location']})

LOAD CSV WITH HEADERS FROM 'file:///cities.csv' AS row
MATCH (country:Country) WHERE ID(country) =
toInteger(row.Country)
CREATE (city:City {name: row.City, location: row['City
Location'], c40: row.C40 = 'True'})
CREATE (city)-[:IN_COUNTRY]->(country)

LOAD CSV WITH HEADERS FROM 'file:///emissions.csv' AS row
MATCH (city:City) WHERE ID(city) = toInteger(row.City)
CREATE (emission:Emission {year: toInteger(row['Reporting
Year']), totalEmissions: toFloat(row['Total Emissions'])})
CREATE (emission)-[:EMISSION_FOR]->(city)

LOAD CSV WITH HEADERS FROM 'file:///reductions.csv' AS row
MATCH (city:City) WHERE ID(city) = toInteger(row.City)
CREATE (reduction:Reduction {
year: toInteger(row['Reporting Year']),
baselineYear: toInteger(row['Baseline year']),
baselineEmissions: toFloat(row['Baseline emissions']),
targetReduction: toFloat(row['Percentage reduction target']),
targetDate: toInteger(row['Target date'])
})
CREATE (reduction)-[:REDUCTION_FOR]->(city)
`}
                        </code>
                    </pre>
                </Card>
            </>
        },

        {
            key: '1',
            label: <Text strong>1. Operations for Maintenance of the Database</Text>,
            children: <>
                <Title level={5}>Data Backup:</Title>
                To automate data backups in Neo4j, you can set up a cron job on
                the server where Neo4j is hosted. Here’s an example of a cron job that takes a
                daily backup at 1 AM:
                <br />
                <br />
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`0 1 * * * /path/to/neo4j/bin/neo4j-admin backup --backup-dir=/path/to/backup/dir
--database=neo4j --pagecache=2G

`}
                        </code>
                    </pre>
                </Card>
                <Title level={5}>Performance Monitoring:</Title>
                Enable and configure monitoring in neo4j.conf
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`dbms.logs.query.enabled=VERBOSE
dbms.logs.query.threshold=200ms
metrics.enabled=true
metrics.prometheus.endpoint=localhost:2004
`}
                        </code>
                    </pre>
                </Card>
                <Title level={5}>Index Management:</Title>
                Regularly review and create indexes based on query patterns:
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`CREATE INDEX ON :City(name);
CREATE INDEX ON :Country(name);
`}
                        </code>
                    </pre>
                </Card>
                <Title level={5}>Data Integrity Checks:</Title>
                Schedule regular integrity checks using APOC procedures:
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`0 5 * * * /path/to/neo4j/bin/neo4j-admin check-consistency --database=neo4j
--verbose=true
`}
                        </code>
                    </pre>
                </Card>
            </>
        },
        {
            key: '2',
            label: <Text strong>2. Formulate ten relevant questions for extracting information from the database, design and develop database functionality for implementing the information extraction (for the relevance consult the instructor)</Text>,
            children: <>
                <ol>
                    <li>What are the total emissions by year for each country?</li>
                    <li>Which city had the highest reduction in emissions compared to its baselineyear?</li>
                    <li>How do emissions trends compare between C40 and non-C40 cities?</li>
                    <li>List all cities in Denmark with their respective total emissions for 2020.</li>
                    <li>What is the percentage reduction in emissions achieved by each city since the baseline year?</li>
                    <li>Which country has the most cities participating in emission reduction programs?</li>
                    <li>Detail the emission and reduction data for cities with more than 1 million population.</li>
                    <li>What are the forecasted reductions for the next decade under current trends?</li>
                    <li>Compare baseline emissions to current emissions for cities with severe pollution issues.</li>
                    <li>Identify relationships between economic indicators (if available) and emission levels.</li>
                </ol>
                <Title level={5}>Implementing Information Extraction:</Title>
                Use Cypher queries to extract this data.
                For instance, for question 1:
                <br />
                <br />
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`MATCH (c:City)-[r:EMISSION_FOR]->(e:Emission)
RETURN c.name, e.year, sum(e.totalEmissions) as TotalEmissions
GROUP BY e.year, c.name
ORDER BY e.year
`}
                        </code>
                    </pre>
                </Card>
            </>
        },
        {
            key: '3',
            label: <Text strong>3. Scaling the Database Model</Text>,
            children: <>
                <Title level={4}>Considerations:</Title>
                <Title level={5}>ACID vs. CAP Theorem:</Title>
                Neo4j strongly supports ACID properties. In distributed
                environments, it's important to consider trade-offs between consistency,
                availability, and partition tolerance (CAP).
                <Title level={4}>Implementation:</Title>
                <Title level={5}>Set up a causal cluster for replication and failover:</Title>
                <Title level={5}>neo4j.conf on all cluster members:</Title>
                <br />
                <br />
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='java'>
                            {`dbms.mode=CORE
causal_clustering.expected_core_cluster_size=3
causal_clustering.discovery_type=LIST
causal_clustering.initial_discovery_members=core1:5000,core2:5000,core3:5000
`}
                        </code>
                    </pre>
                </Card>
            </>
        },
        {
            key: '4',
            label: <Text strong>4. Validate and Test Database Operations</Text>,
            children: <>
                <Title level={5}>Unit Testing:</Title>
                Use the Neo4j testing library for writing unit tests for Cypher queries:
                <br />
                <br />
                Example in java:
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='java'>
                            {`try (Driver driver = GraphDatabase.driver(uri,
AuthTokens.basic(user, password));
Session session = driver.session()) {
String result = session.writeTransaction(tx -> {
Result res = tx.run("CREATE (n:Node) RETURN n");
return res.single().get(0).asString();
});
assert result.contains("Node");
}
`}
                        </code>
                    </pre>
                </Card>
                <Title level={5}>Integration Testing:</Title>
                Test the integration of Neo4j with applications.
                <Title level={5}>Load Testing:</Title>
                Simulate concurrent access to evaluate performance under stress.
                Tools like Apache JMeter can simulate multiple users or queries accessing the
                database concurrently.
            </>
        },
        {
            key: '5',
            label: <Text strong>5. Evaluate Database Performance</Text>,
            children: <>
                <Title level={5}>Monitoring Tools:</Title>
                Use Neo4j’s query log, explain plans, and profiling features to identify slow queries and bottlenecks.
                <Title level={5}>Optimization:</Title>
                Optimize queries, adjust database configurations, and scale resources based on findings.
                <br />
                <br />
                Analyze slow queries using PROFILE:
                <br />
                <br />
                <Card bordered={true} style={{ width: "100%" }}>
                    <pre>
                        <code className='sql'>
                            {`PROFILE MATCH (c:City)-[:EMISSION_FOR]->(e:Emission)
RETURN c.name, sum(e.totalEmissions)
GROUP BY c.name

`}
                        </code>
                    </pre>
                </Card>
            </>
        },
        {
            key: '6',
            label: <Text strong>6. Document</Text>,
            children: <>
                <Title level={5}>Process Documentation:</Title>
                Use tools like Lucidchart or Microsoft Visio to create ER
                diagrams, architecture diagrams, and flowcharts.
                <Title level={5}>Operation Documentation:</Title>
                Document the maintenance operations, backup
                procedures, and testing strategies.
                <br />
                <br />
                Below are pictures of the graph and a subgraph with nodes related to the
                Country-node “Denmark”:
                <br />
                <br />
                <Flex gap="middle" align="start" vertical>
                    <Flex style={{ width: "100%" }} justify={'center'} align={'flex-start'}>
                        <div style={{ width: "100%", maxWidth: 600 }}>
                            <img src={graphs} alt="ER-diagram" style={{ width: "100%" }} />
                        </div>
                    </Flex>
                </Flex>
            </>
        },
        {
            key: '7',
            label: <Text strong>7. Formulate Conclusions and Recommendations</Text>,
            children: <>
                We really like the Neo4J desktop UI. It feels more straightforward to use compared to f.x MSSQL SSMS and MySql workbench.
                <br />
                <br />
                We came up with these pros and cons:
                <Title level={5}>Pros:</Title>
                <ul>
                    <li>Flexibility</li>
                    <li>Graphical visual presentation</li>
                    <li>Fast execution (connected data makes it easier to retrieve and navigate)</li>
                    <li>No need for primary ID</li>
                </ul>
                <Title level={5}>Cons:</Title>
                <ul>
                    <li>Less Scalability (Horizontally)</li>
                    <li>Declaring data types not available</li>
                    <li>Performance issues with larger datasets.</li>
                </ul>
            </>
        },
    ];
    return (
        <>
            <Flex gap="middle" align="start" vertical>
                <Flex style={{ width: "100%" }} justify={'center'} align={'flex-start'}>
                    <div style={{ padding: "50px 125px 100px 125px", width: "100%", maxWidth: 1000 }}>
                        <Title>Neo4j</Title>
                        <br />
                        <Collapse accordion defaultActiveKey={['1']} items={items} />
                    </div>
                </Flex>
            </Flex>
        </>
    )
}

export default Neo4j;