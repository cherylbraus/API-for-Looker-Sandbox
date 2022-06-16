const queryResponse = {
    "aggregate_table_used_info": null,
    "cached_derived": true,
    "data": [
        {
            "margin_forward_ab_shipment_level_data.generated_date_week": {
                "value": "2022-06-06",
                "filterable_value": "2022-06-06 for 7 days",
                "links": [
                    {
                        "label": "by Generated Date Date",
                        "label_prefix": "by",
                        "label_value": "Generated Date Date",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_date,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-06-06+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-06-06",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-06-06"
                    },
                    {
                        "label": "by Generated Date Time",
                        "label_prefix": "by",
                        "label_value": "Generated Date Time",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_time,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-06-06+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-06-06",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-06-06"
                    }
                ]
            },
            "shipment_predicted_attempted_and_successful": {
                "Control": {
                    "value": 11,
                    "rendered": "11",
                    "links": [
                        {
                            "label": "Show All 11",
                            "label_prefix": "Show All",
                            "label_value": "11",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-06-06+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 6,
                    "rendered": "6",
                    "links": [
                        {
                            "label": "Show All 6",
                            "label_prefix": "Show All",
                            "label_value": "6",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-06-06+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            },
            "shipment_predicted_attempted": {
                "Control": {
                    "value": 18,
                    "rendered": "18",
                    "links": [
                        {
                            "label": "Show All 18",
                            "label_prefix": "Show All",
                            "label_value": "18",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-06-06+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 20,
                    "rendered": "20",
                    "links": [
                        {
                            "label": "Show All 20",
                            "label_prefix": "Show All",
                            "label_value": "20",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-06-06+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            }
        },
        {
            "margin_forward_ab_shipment_level_data.generated_date_week": {
                "value": "2022-05-30",
                "filterable_value": "2022-05-30 for 7 days",
                "links": [
                    {
                        "label": "by Generated Date Date",
                        "label_prefix": "by",
                        "label_value": "Generated Date Date",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_date,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-30+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-05-30",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-05-30"
                    },
                    {
                        "label": "by Generated Date Time",
                        "label_prefix": "by",
                        "label_value": "Generated Date Time",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_time,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-30+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-05-30",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-05-30"
                    }
                ]
            },
            "shipment_predicted_attempted_and_successful": {
                "Control": {
                    "value": 11,
                    "rendered": "11",
                    "links": [
                        {
                            "label": "Show All 11",
                            "label_prefix": "Show All",
                            "label_value": "11",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-30+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 6,
                    "rendered": "6",
                    "links": [
                        {
                            "label": "Show All 6",
                            "label_prefix": "Show All",
                            "label_value": "6",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-30+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            },
            "shipment_predicted_attempted": {
                "Control": {
                    "value": 26,
                    "rendered": "26",
                    "links": [
                        {
                            "label": "Show All 26",
                            "label_prefix": "Show All",
                            "label_value": "26",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-30+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 41,
                    "rendered": "41",
                    "links": [
                        {
                            "label": "Show All 41",
                            "label_prefix": "Show All",
                            "label_value": "41",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-30+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            }
        },
        {
            "margin_forward_ab_shipment_level_data.generated_date_week": {
                "value": "2022-05-23",
                "filterable_value": "2022-05-23 for 7 days",
                "links": [
                    {
                        "label": "by Generated Date Date",
                        "label_prefix": "by",
                        "label_value": "Generated Date Date",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_date,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-23+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-05-23",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-05-23"
                    },
                    {
                        "label": "by Generated Date Time",
                        "label_prefix": "by",
                        "label_value": "Generated Date Time",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_time,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-23+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-05-23",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-05-23"
                    }
                ]
            },
            "shipment_predicted_attempted_and_successful": {
                "Control": {
                    "value": 23,
                    "rendered": "23",
                    "links": [
                        {
                            "label": "Show All 23",
                            "label_prefix": "Show All",
                            "label_value": "23",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-23+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 11,
                    "rendered": "11",
                    "links": [
                        {
                            "label": "Show All 11",
                            "label_prefix": "Show All",
                            "label_value": "11",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-23+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            },
            "shipment_predicted_attempted": {
                "Control": {
                    "value": 47,
                    "rendered": "47",
                    "links": [
                        {
                            "label": "Show All 47",
                            "label_prefix": "Show All",
                            "label_value": "47",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-23+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 50,
                    "rendered": "50",
                    "links": [
                        {
                            "label": "Show All 50",
                            "label_prefix": "Show All",
                            "label_value": "50",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-23+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            }
        },
        {
            "margin_forward_ab_shipment_level_data.generated_date_week": {
                "value": "2022-05-16",
                "filterable_value": "2022-05-16 for 7 days",
                "links": [
                    {
                        "label": "by Generated Date Date",
                        "label_prefix": "by",
                        "label_value": "Generated Date Date",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_date,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-16+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-05-16",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-05-16"
                    },
                    {
                        "label": "by Generated Date Time",
                        "label_prefix": "by",
                        "label_value": "Generated Date Time",
                        "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipment_predicted_attempted_and_successful,margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_time,shipment_predicted_attempted&pivots=margin_forward_ab_shipment_level_data.test_group_name&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-16+for+7+days&sorts=margin_forward_ab_shipment_level_data.test_group_name,margin_forward_ab_shipment_level_data.generated_date_week desc&limit=500&column_limit=50&dynamic_fields=%5B%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipments_rescheduled%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Reschedule+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_reschedule_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_rolls%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Roll+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_roll_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_bounces%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Shipment+Bounce+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22shipment_bounce_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Margin+Line+Haul+plus+Fuel%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_2%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.line_haul_plus_fuel_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_margin_line_haul_plus_fuel%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Total+Margin%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.total_margin_percent%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_total_margin%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.include_in_company_margin%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Predicted+Attempted+and+Successful%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_predicted_attempted_and_successful%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.all_prediction_attempt%22%3A%22Yes%22%2C%22shipments_margin_forward_ab_test.has_correct_count%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipments+Rescheduled%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipments_rescheduled%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_rescheduled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Total+Shipments%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22total_shipments%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Bounces%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_bounces%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_bounced%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Shipment+Rolls%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22shipment_rolls%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.has_rolled%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.is_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Btonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Carrier+TONUs%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3Anull%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.shipment_count%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22carrier_tonus%22%2C%22type%22%3A%22count%22%2C%22_type_hint%22%3A%22number%22%2C%22filters%22%3A%7B%22shipments_margin_forward_ab_test.carrier_tonu%22%3A%22Yes%22%7D%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bcarrier_tonus%7D+%2F+%24%7Btotal_shipments%7D%22%2C%22label%22%3A%22Carrier+TONU+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22carrier_tonu_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%2C%7B%22category%22%3A%22measure%22%2C%22expression%22%3Anull%2C%22label%22%3A%22Average+Time+to+Schedule%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22decimal_1%22%2C%22based_on%22%3A%22shipments_margin_forward_ab_test.hours_first_on_hold_to_first_tendered%22%2C%22_kind_hint%22%3A%22measure%22%2C%22measure%22%3A%22average_time_to_schedule%22%2C%22type%22%3A%22average%22%2C%22_type_hint%22%3A%22number%22%7D%2C%7B%22category%22%3A%22table_calculation%22%2C%22expression%22%3A%22%24%7Bshipment_predicted_attempted_and_successful%7D+%2F+%24%7Bshipment_predicted_attempted%7D%22%2C%22label%22%3A%22Successfully+Scheduled+Rate%22%2C%22value_format%22%3Anull%2C%22value_format_name%22%3A%22percent_1%22%2C%22_kind_hint%22%3A%22measure%22%2C%22table_calculation%22%3A%22successfully_scheduled_rate%22%2C%22_type_hint%22%3A%22number%22%2C%22is_disabled%22%3Atrue%7D%5D",
                        "type": "drill",
                        "type_label": "Drill into 2022-05-16",
                        "type_label_prefix": "Drill into",
                        "type_label_value": "2022-05-16"
                    }
                ]
            },
            "shipment_predicted_attempted_and_successful": {
                "Control": {
                    "value": 1,
                    "rendered": "1",
                    "links": [
                        {
                            "label": "Show All 1",
                            "label_prefix": "Show All",
                            "label_value": "1",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-16+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 1,
                    "rendered": "1",
                    "links": [
                        {
                            "label": "Show All 1",
                            "label_prefix": "Show All",
                            "label_value": "1",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-16+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&f[shipments_margin_forward_ab_test.has_correct_count]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            },
            "shipment_predicted_attempted": {
                "Control": {
                    "value": 7,
                    "rendered": "7",
                    "links": [
                        {
                            "label": "Show All 7",
                            "label_prefix": "Show All",
                            "label_value": "7",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Control&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-16+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                },
                "Experiment": {
                    "value": 1,
                    "rendered": "1",
                    "links": [
                        {
                            "label": "Show All 1",
                            "label_prefix": "Show All",
                            "label_value": "1",
                            "url": "/explore/snowflake_marketplace/margin_forward_ab_shipment_level_data?fields=shipments_margin_forward_ab_test.id&f[margin_forward_ab_shipment_level_data.test_group_name]=Experiment&f[margin_forward_ab_shipment_level_data.generated_date_date]=after+2022%2F05%2F20&f[margin_forward_ab_shipment_level_data.generated_date_week]=2022-05-16+for+7+days&f[shipments_margin_forward_ab_test.all_prediction_attempt]=Yes&query_timezone=America%2FNew_York&limit=500",
                            "type": "measure_default"
                        }
                    ]
                }
            }
        }
    ],
    "drill_menu_build_time": 0.206618,
    "expired": false,
    "fields": {
        "measures": [],
        "dimensions": [
            {
                "align": "left",
                "can_filter": true,
                "category": "dimension",
                "default_filter_value": null,
                "description": "This is the date when the predicted appointments are generated",
                "enumerations": null,
                "field_group_label": "Timestamp Data",
                "fill_style": "range",
                "fiscal_month_offset": 0,
                "has_allowed_values": false,
                "hidden": false,
                "is_filter": false,
                "is_numeric": false,
                "label": "Event Data Generated Date Week",
                "label_from_parameter": null,
                "label_short": "Generated Date Week",
                "map_layer": null,
                "name": "margin_forward_ab_shipment_level_data.generated_date_week",
                "strict_value_format": false,
                "requires_refresh_on_sort": false,
                "sortable": true,
                "suggestions": null,
                "tags": [],
                "type": "date_week",
                "user_attribute_filter_types": [
                    "datetime",
                    "advanced_filter_datetime"
                ],
                "value_format": null,
                "view": "margin_forward_ab_shipment_level_data",
                "view_label": "Event Data",
                "dynamic": false,
                "week_start_day": "monday",
                "original_view": "margin_forward_ab_shipment_level_data",
                "dimension_group": "margin_forward_ab_shipment_level_data.generated_date",
                "error": null,
                "field_group_variant": "Generated Date Week",
                "measure": false,
                "parameter": false,
                "primary_key": false,
                "project_name": "snowflake",
                "scope": "margin_forward_ab_shipment_level_data",
                "suggest_dimension": "margin_forward_ab_shipment_level_data.generated_date_week",
                "suggest_explore": "margin_forward_ab_shipment_level_data",
                "suggestable": false,
                "is_fiscal": false,
                "is_timeframe": true,
                "can_time_filter": false,
                "time_interval": {
                    "name": "week",
                    "count": 1
                },
                "lookml_link": "/projects/snowflake/files/MarketPlace%2FCore%2Fviews%2Fmargin_forward_ab_shipment_level_data.view.lkml?line=69",
                "permanent": null,
                "source_file": "MarketPlace/Core/views/margin_forward_ab_shipment_level_data.view.lkml",
                "source_file_path": "snowflake/MarketPlace/Core/views/margin_forward_ab_shipment_level_data.view.lkml",
                "sql": "${TABLE}.generated_date ",
                "sql_case": null,
                "filters": null,
                "times_used": 0,
                "sorted": {
                    "sort_index": 0,
                    "desc": true
                }
            }
        ],
        "table_calculations": [],
        "pivots": [
            {
                "align": "left",
                "can_filter": true,
                "category": "dimension",
                "default_filter_value": null,
                "description": "Descriptive Name of the Control or Experimental Group",
                "enumerations": null,
                "field_group_label": "Categorical",
                "fill_style": null,
                "fiscal_month_offset": 0,
                "has_allowed_values": false,
                "hidden": false,
                "is_filter": false,
                "is_numeric": false,
                "label": "Event Data Test Group Name",
                "label_from_parameter": null,
                "label_short": "Test Group Name",
                "map_layer": null,
                "name": "margin_forward_ab_shipment_level_data.test_group_name",
                "strict_value_format": false,
                "requires_refresh_on_sort": false,
                "sortable": true,
                "suggestions": null,
                "tags": [],
                "type": "string",
                "user_attribute_filter_types": [
                    "string",
                    "advanced_filter_string"
                ],
                "value_format": null,
                "view": "margin_forward_ab_shipment_level_data",
                "view_label": "Event Data",
                "dynamic": false,
                "week_start_day": "monday",
                "original_view": "margin_forward_ab_shipment_level_data",
                "dimension_group": null,
                "error": null,
                "field_group_variant": "Test Group Name",
                "measure": false,
                "parameter": false,
                "primary_key": false,
                "project_name": "snowflake",
                "scope": "margin_forward_ab_shipment_level_data",
                "suggest_dimension": "margin_forward_ab_shipment_level_data.test_group_name",
                "suggest_explore": "margin_forward_ab_shipment_level_data",
                "suggestable": true,
                "is_fiscal": false,
                "is_timeframe": false,
                "can_time_filter": false,
                "time_interval": null,
                "lookml_link": "/projects/snowflake/files/MarketPlace%2FCore%2Fviews%2Fmargin_forward_ab_shipment_level_data.view.lkml?line=40",
                "permanent": null,
                "source_file": "MarketPlace/Core/views/margin_forward_ab_shipment_level_data.view.lkml",
                "source_file_path": "snowflake/MarketPlace/Core/views/margin_forward_ab_shipment_level_data.view.lkml",
                "sql": "${TABLE}.test_group_type ",
                "sql_case": null,
                "filters": null,
                "times_used": 0,
                "sorted": {
                    "sort_index": 1,
                    "desc": false
                }
            }
        ],
        "measure_like": [],
        "supermeasure_like": [],
        "dimension_like": [
            {
                "align": "left",
                "can_filter": true,
                "category": "dimension",
                "default_filter_value": null,
                "description": "This is the date when the predicted appointments are generated",
                "enumerations": null,
                "field_group_label": "Timestamp Data",
                "fill_style": "range",
                "fiscal_month_offset": 0,
                "has_allowed_values": false,
                "hidden": false,
                "is_filter": false,
                "is_numeric": false,
                "label": "Event Data Generated Date Week",
                "label_from_parameter": null,
                "label_short": "Generated Date Week",
                "map_layer": null,
                "name": "margin_forward_ab_shipment_level_data.generated_date_week",
                "strict_value_format": false,
                "requires_refresh_on_sort": false,
                "sortable": true,
                "suggestions": null,
                "tags": [],
                "type": "date_week",
                "user_attribute_filter_types": [
                    "datetime",
                    "advanced_filter_datetime"
                ],
                "value_format": null,
                "view": "margin_forward_ab_shipment_level_data",
                "view_label": "Event Data",
                "dynamic": false,
                "week_start_day": "monday",
                "original_view": "margin_forward_ab_shipment_level_data",
                "dimension_group": "margin_forward_ab_shipment_level_data.generated_date",
                "error": null,
                "field_group_variant": "Generated Date Week",
                "measure": false,
                "parameter": false,
                "primary_key": false,
                "project_name": "snowflake",
                "scope": "margin_forward_ab_shipment_level_data",
                "suggest_dimension": "margin_forward_ab_shipment_level_data.generated_date_week",
                "suggest_explore": "margin_forward_ab_shipment_level_data",
                "suggestable": false,
                "is_fiscal": false,
                "is_timeframe": true,
                "can_time_filter": false,
                "time_interval": {
                    "name": "week",
                    "count": 1
                },
                "lookml_link": "/projects/snowflake/files/MarketPlace%2FCore%2Fviews%2Fmargin_forward_ab_shipment_level_data.view.lkml?line=69",
                "permanent": null,
                "source_file": "MarketPlace/Core/views/margin_forward_ab_shipment_level_data.view.lkml",
                "source_file_path": "snowflake/MarketPlace/Core/views/margin_forward_ab_shipment_level_data.view.lkml",
                "sql": "${TABLE}.generated_date ",
                "sql_case": null,
                "filters": null,
                "times_used": 0,
                "sorted": {
                    "sort_index": 0,
                    "desc": true
                }
            }
        ]
    },
    "fill_fields": [
        "margin_forward_ab_shipment_level_data.generated_date_week"
    ],
    "forecast_result": null,
    "has_row_totals": false,
    "has_totals": false,
    "id": "c20194fa55215045db4a3d8a7b96b394:{\"hidden_points_if_no\":[],\"hidden_fields\":[\"shipment_predicted_attempted_and_successful\",\"shipment_predicted_attempted\"]}",
    "null_sort_treatment": "high",
    "number_format": "1,234.56",
    "pivots": [
        {
            "key": "Control",
            "data": {
                "margin_forward_ab_shipment_level_data.test_group_name": "Control"
            },
            "sort_values": {
                "margin_forward_ab_shipment_level_data.test_group_name": "Control"
            },
            "labels": {
                "margin_forward_ab_shipment_level_data.test_group_name": "<a href='#drillmenu' target='_self'>Control</a>"
            },
            "is_total": false,
            "metadata": {
                "margin_forward_ab_shipment_level_data.test_group_name": {
                    "value": "Control"
                }
            }
        },
        {
            "key": "Experiment",
            "data": {
                "margin_forward_ab_shipment_level_data.test_group_name": "Experiment"
            },
            "sort_values": {
                "margin_forward_ab_shipment_level_data.test_group_name": "Experiment"
            },
            "labels": {
                "margin_forward_ab_shipment_level_data.test_group_name": "<a href='#drillmenu' target='_self'>Experiment</a>"
            },
            "is_total": false,
            "metadata": {
                "margin_forward_ab_shipment_level_data.test_group_name": {
                    "value": "Experiment"
                }
            }
        }
    ],
    "ran_at": "2022-06-07T20:29:50+00:00",
    "sql": "-- raw sql results do not include filled-in values for 'margin_forward_ab_shipment_level_data.generated_date_week'\n\n\n-- use existing margin_forward_ab_shipment_level_data in LOOKER_SCRATCH.LR$YVK4N1654632936540_margin_forward_ab_shipment_level_data\n-- use existing shipments_margin_forward_ab_test in LOOKER_SCRATCH.LR$YVMTB1654633049227_shipments_margin_forward_ab_test\nSELECT * FROM (\nSELECT *, DENSE_RANK() OVER (ORDER BY z___min_rank) as z___pivot_row_rank, RANK() OVER (PARTITION BY z__pivot_col_rank ORDER BY z___min_rank) as z__pivot_col_ordering, CASE WHEN z___min_rank = z___rank THEN 1 ELSE 0 END AS z__is_highest_ranked_cell FROM (\nSELECT *, MIN(z___rank) OVER (PARTITION BY \"margin_forward_ab_shipment_level_data.generated_date_week\") as z___min_rank FROM (\nSELECT *, RANK() OVER (ORDER BY \"margin_forward_ab_shipment_level_data.generated_date_week\" DESC, z__pivot_col_rank) AS z___rank FROM (\nSELECT *, DENSE_RANK() OVER (ORDER BY CASE WHEN \"margin_forward_ab_shipment_level_data.test_group_name\" IS NULL THEN 1 ELSE 0 END, \"margin_forward_ab_shipment_level_data.test_group_name\") AS z__pivot_col_rank FROM (\nSELECT\n    margin_forward_ab_shipment_level_data.test_group_type  AS \"margin_forward_ab_shipment_level_data.test_group_name\",\n        (TO_CHAR(DATE_TRUNC('week', margin_forward_ab_shipment_level_data.generated_date ), 'YYYY-MM-DD')) AS \"margin_forward_ab_shipment_level_data.generated_date_week\",\n    COUNT(DISTINCT CASE WHEN shipments_margin_forward_ab_test.all_prediction_attempt AND shipments_margin_forward_ab_test.has_correct_count THEN shipments_margin_forward_ab_test.id ELSE NULL END) AS shipment_predicted_attempted_and_successful,\n    COUNT(DISTINCT CASE WHEN shipments_margin_forward_ab_test.all_prediction_attempt THEN shipments_margin_forward_ab_test.id ELSE NULL END) AS shipment_predicted_attempted\nFROM LOOKER_SCRATCH.LR$YVK4N1654632936540_margin_forward_ab_shipment_level_data AS margin_forward_ab_shipment_level_data\nINNER JOIN LOOKER_SCRATCH.LR$YVMTB1654633049227_shipments_margin_forward_ab_test AS shipments_margin_forward_ab_test ON shipments_margin_forward_ab_test.id=margin_forward_ab_shipment_level_data.shipment_id\nWHERE (margin_forward_ab_shipment_level_data.generated_date ) >= (TO_TIMESTAMP('2022-05-20'))\nGROUP BY\n    (DATE_TRUNC('week', margin_forward_ab_shipment_level_data.generated_date )),\n    1) ww\n) bb WHERE z__pivot_col_rank <= 16384\n) aa\n) xx\n) zz\n WHERE (z__pivot_col_rank <= 50 OR z__is_highest_ranked_cell = 1) AND (z___pivot_row_rank <= 500 OR z__pivot_col_ordering = 1) ORDER BY z___pivot_row_rank",
    "sql_explain": "EXPLAIN SELECT * FROM (\nSELECT *, DENSE_RANK() OVER (ORDER BY z___min_rank) as z___pivot_row_rank, RANK() OVER (PARTITION BY z__pivot_col_rank ORDER BY z___min_rank) as z__pivot_col_ordering, CASE WHEN z___min_rank = z___rank THEN 1 ELSE 0 END AS z__is_highest_ranked_cell FROM (\nSELECT *, MIN(z___rank) OVER (PARTITION BY \"margin_forward_ab_shipment_level_data.generated_date_week\") as z___min_rank FROM (\nSELECT *, RANK() OVER (ORDER BY \"margin_forward_ab_shipment_level_data.generated_date_week\" DESC, z__pivot_col_rank) AS z___rank FROM (\nSELECT *, DENSE_RANK() OVER (ORDER BY CASE WHEN \"margin_forward_ab_shipment_level_data.test_group_name\" IS NULL THEN 1 ELSE 0 END, \"margin_forward_ab_shipment_level_data.test_group_name\") AS z__pivot_col_rank FROM (\nSELECT\n    margin_forward_ab_shipment_level_data.test_group_type  AS \"margin_forward_ab_shipment_level_data.test_group_name\",\n        (TO_CHAR(DATE_TRUNC('week', margin_forward_ab_shipment_level_data.generated_date ), 'YYYY-MM-DD')) AS \"margin_forward_ab_shipment_level_data.generated_date_week\",\n    COUNT(DISTINCT CASE WHEN shipments_margin_forward_ab_test.all_prediction_attempt AND shipments_margin_forward_ab_test.has_correct_count THEN shipments_margin_forward_ab_test.id ELSE NULL END) AS shipment_predicted_attempted_and_successful,\n    COUNT(DISTINCT CASE WHEN shipments_margin_forward_ab_test.all_prediction_attempt THEN shipments_margin_forward_ab_test.id ELSE NULL END) AS shipment_predicted_attempted\nFROM LOOKER_SCRATCH.LR$YVK4N1654632936540_margin_forward_ab_shipment_level_data AS margin_forward_ab_shipment_level_data\nINNER JOIN LOOKER_SCRATCH.LR$YVMTB1654633049227_shipments_margin_forward_ab_test AS shipments_margin_forward_ab_test ON shipments_margin_forward_ab_test.id=margin_forward_ab_shipment_level_data.shipment_id \nWHERE (margin_forward_ab_shipment_level_data.generated_date ) >= (TO_TIMESTAMP('2022-05-20'))\nGROUP BY\n    (DATE_TRUNC('week', margin_forward_ab_shipment_level_data.generated_date )),\n    1) ww\n) bb WHERE z__pivot_col_rank <= 16384\n) aa\n) xx\n) zz\n WHERE (z__pivot_col_rank <= 50 OR z__is_highest_ranked_cell = 1) AND (z___pivot_row_rank <= 500 OR z__pivot_col_ordering = 1) ORDER BY z___pivot_row_rank",
    "supports_pivot_in_db": true,
    "timezone": "America/New_York",
    "is_local": false,
    "table_calcs_complete": true,
    "tracked_attributes": {
        "result.data.length": 4,
        "result.drill_menu_build_time": 0.206618,
        "result.from_cache": true,
        "result.sql.length": 2564,
        "result.supports_pivot_in_db": true
    },
    "sorts": []
}